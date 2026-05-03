export default function History() {
  const timeline = [
    {
      year: "570 г.",
      title: "Рождение Пророка Мухаммада ﷺ",
      text: "В Мекке родился Мухаммад ибн Абдуллах из рода Хашим. Он рано потерял родителей и воспитывался у деда и дяди Абу Талиба. Уже в юности его называли «Аль-Амин» — Верный, Честный.",
    },
    {
      year: "610 г.",
      title: "Первое откровение",
      text: "В пещере Хира на горе Нур архангел Джибриль явился Мухаммаду ﷺ и передал первые аяты Корана: «Читай во имя Господа твоего, Который сотворил...» — начало великой миссии.",
    },
    {
      year: "622 г.",
      title: "Хиджра — переселение в Медину",
      text: "Спасаясь от преследований мекканских язычников, Пророк ﷺ и его сподвижники совершили Хиджру в Медину. Этот год стал точкой отсчёта исламского календаря.",
    },
    {
      year: "630 г.",
      title: "Завоевание Мекки",
      text: "Войска мусульман вошли в Мекку без кровопролития. Пророк ﷺ объявил всеобщее прощение и очистил Каабу от идолов — город стал духовным центром ислама.",
    },
    {
      year: "632 г.",
      title: "Прощальное паломничество",
      text: "В своей последней проповеди Пророк ﷺ провозгласил: «Все люди равны перед Аллахом, как зубцы гребня». Вскоре он скончался, оставив миру Коран и Сунну.",
    },
  ];

  return (
    <section id="history" className="bg-stone-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-stone-500 mb-4">История и биография</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-16 leading-tight">
          Жизнь Пророка Мухаммада ﷺ и рождение ислама
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-300" />
          <div className="flex flex-col gap-12">
            {timeline.map((item) => (
              <div key={item.year} className="pl-12 relative">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1">{item.year}</p>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-emerald-900 text-white rounded-none p-10">
          <p className="text-sm uppercase tracking-wide opacity-70 mb-3">Из Корана</p>
          <p className="text-2xl lg:text-3xl leading-relaxed font-light">
            «Мы отправили тебя не иначе, как милостью для миров»
          </p>
          <p className="mt-4 opacity-60 text-sm">Коран, сура 21 «Аль-Анбия», аят 107</p>
        </div>
      </div>
    </section>
  );
}
