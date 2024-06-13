import FadeInOut from "../animation/FadeInOut";

export default function Presentation() {
  return (
    <div>
      <FadeInOut>
        <div className="w-full h-full justify-center items-center  text-center text-white bg-baramey-orange">
          <div className="text-3xl ">
            <h1 className="font-extrabold py-10 ">Dégustez!</h1>
            <p className="uppercase font-semibold">
              spécialité <br /> cambodgienne
            </p>
          </div>

          <div className="relative py-10">
            <img src="/boeuf-sansbg.png" alt="boeuf-sansbg" />
            <p className="absolute top-14 text-xl bg-black/90 shadow-2xl rounded-full p-6 -rotate-12 left-14  font-bold font-gagalin">
              Boeuf <br /> Piquant
              <br />
              13€90
            </p>
          </div>
          <p className="text-xl pb-7   mx-16">
            "Notre plat de bœuf épicé est un délice grillé à la perfection,
            mariné dans un mélange épicé de gousses d'ail, de piments et de jus
            de citron vert. Servi avec une salade de légumes frais et une sauce
            crémeuse, c'est le choix idéal pour les amateurs de piquant."
          </p>
          <div className="py-10">
            <a
              href="https://cdn.website.dish.co/media/a9/ce/7590335/Menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-4 border border-white rounded-none uppercase transition-all duration-300 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-white/20 hover:border-transparent"
            >
              décrouvrez la menu
            </a>
          </div>
        </div>
      </FadeInOut>
    </div>
  );
}
