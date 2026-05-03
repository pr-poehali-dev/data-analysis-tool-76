import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", question: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-stone-500 mb-4">Обратная связь</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4 leading-tight">
          Задайте свой вопрос
        </h2>
        <p className="text-stone-500 mb-12 text-lg">
          Интересует ислам? Напишите нам — мы ответим на ваши вопросы с уважением и открытостью.
        </p>

        {sent ? (
          <div className="border border-emerald-800 p-10 text-center">
            <p className="text-3xl mb-3">☪</p>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Ваш вопрос отправлен!</h3>
            <p className="text-stone-500">Мы ответим вам в ближайшее время. Джазакумуллаху хайран!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm uppercase tracking-wide text-stone-500 mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                required
                placeholder="Имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-emerald-800 transition-colors duration-200 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-wide text-stone-500 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-emerald-800 transition-colors duration-200 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-wide text-stone-500 mb-2">
                Ваш вопрос
              </label>
              <textarea
                required
                rows={5}
                placeholder="Напишите ваш вопрос об исламе..."
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                className="w-full border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-emerald-800 transition-colors duration-200 bg-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-900 text-white border border-emerald-900 px-6 py-3 text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-emerald-900 cursor-pointer w-fit"
            >
              Отправить вопрос
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
