import FadeInOut from "../animation/FadeInOut";

export default function Presentation() {
  return (
    <div>
      <FadeInOut>
        <div className="w-full h-full justify-center items-center text-center text-white bg-baramey-orange">
          <div className="text-3xl md:text-4xl lg:text-5xl ">
            <h1 className="font-extrabold py-10 lg:py-20 ">Dégustez!</h1>
            <p className="uppercase font-semibold">
              spécialité <br /> cambodgienne
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center items-center">
            <div className="relative py-10 xl:w-1/2 2xl:mx-40">
              <img
                className="w-full"
                src="/boeuf-sansbg.png"
                alt="boeuf-sansbg"
              />
              <p className="absolute top-1/4 left-1/4 md:left-1/3 md:text-2xl lg:text-3xl 2xl:text-4xl transform -translate-x-1/2 -translate-y-1/2 text-xl xl:text-3xl bg-black/90 shadow-2xl rounded-full p-6 -rotate-12 font-bold font-gagalin">
                Boeuf <br /> Piquant <br /> 13€90
              </p>
            </div>
            <div className="xl:w-1/2 xl:pl-10 xl:mx-32 xl:py-24 mx-9 md:mx-28">
              <p className="text-xl pb-7 md:text-2xl lg:text-3xl">
                "Notre plat de bœuf épicé est un délice grillé à la perfection,
                mariné dans un mélange épicé de gousses d'ail, de piments et de
                jus de citron vert. Servi avec une salade de légumes frais et
                une sauce crémeuse, c'est le choix idéal pour les amateur de
                piments."
              </p>
              <div className="py-10 md:py-20 xl:pt-20">
                <a
                  href="https://cdn.website.dish.co/media/a9/ce/7590335/Menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-4 border border-white rounded-none uppercase transition-all duration-300 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-white/20 hover:border-transparent"
                >
                  découvrez le menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInOut>
    </div>
  );
}
