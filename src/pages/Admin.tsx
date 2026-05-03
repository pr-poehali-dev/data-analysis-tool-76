import { useEffect, useState } from "react";

const API_URL = "https://functions.poehali.dev/21da5dda-7463-46ac-b6be-8fc8ada3e9c0";

interface Question {
  id: number;
  name: string;
  email: string;
  question: string;
  created_at: string;
}

export default function Admin() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => { setQuestions(data); setLoading(false); })
      .catch(() => { setError("Не удалось загрузить вопросы"); setLoading(false); });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-emerald-800 mb-2">Администратор</p>
        <h1 className="text-4xl font-bold text-stone-900 mb-10">Вопросы от посетителей</h1>

        {loading && <p className="text-stone-500">Загрузка...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && questions.length === 0 && (
          <p className="text-stone-400 text-lg">Вопросов пока нет.</p>
        )}

        <div className="flex flex-col gap-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white border border-stone-200 p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-stone-900">{q.name}</p>
                  <p className="text-sm text-stone-500">{q.email}</p>
                </div>
                <p className="text-xs text-stone-400">
                  {new Date(q.created_at).toLocaleDateString("ru-RU", {
                    day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              </div>
              <p className="text-stone-700 leading-relaxed">{q.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
