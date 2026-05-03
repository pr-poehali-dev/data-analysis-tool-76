import json
import os
import pg8000.native

def handler(event: dict, context) -> dict:
    """Сохранение и получение вопросов об исламе из базы данных."""
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    dsn = os.environ["DATABASE_URL"]
    # pg8000 принимает параметры отдельно, парсим DSN вручную
    import urllib.parse
    p = urllib.parse.urlparse(dsn)
    conn = pg8000.native.Connection(
        host=p.hostname,
        port=p.port or 5432,
        database=p.path.lstrip("/"),
        user=p.username,
        password=p.password,
    )

    if event.get("httpMethod") == "POST":
        body = json.loads(event.get("body") or "{}")
        name = body.get("name", "").strip()
        email = body.get("email", "").strip()
        question = body.get("question", "").strip()

        if not name or not email or not question:
            conn.close()
            return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "Заполните все поля"})}

        rows = conn.run(
            "INSERT INTO questions (name, email, question) VALUES (:name, :email, :question) RETURNING id",
            name=name, email=email, question=question,
        )
        conn.close()
        return {"statusCode": 200, "headers": cors_headers, "body": json.dumps({"success": True, "id": rows[0][0]})}

    if event.get("httpMethod") == "GET":
        rows = conn.run("SELECT id, name, email, question, created_at FROM questions ORDER BY created_at DESC")
        conn.close()
        result = [
            {"id": r[0], "name": r[1], "email": r[2], "question": r[3], "created_at": r[4].isoformat()}
            for r in rows
        ]
        return {"statusCode": 200, "headers": cors_headers, "body": json.dumps(result, ensure_ascii=False)}

    conn.close()
    return {"statusCode": 405, "headers": cors_headers, "body": json.dumps({"error": "Method not allowed"})}
