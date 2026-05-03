export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/59d166a7-945d-44a8-b052-2ceb07df4e84/files/b76aae83-9ac2-4726-a3a8-f4922928c642.jpg"
          alt="Интерьер мечети"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Пять столпов ислама</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Шахада — исповедание веры. Салят — молитва пять раз в день. Закят — очищение имущества. 
          Саум — пост в Рамадан. Хадж — паломничество в Мекку.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}