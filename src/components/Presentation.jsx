import { Link } from "react-router-dom";

export default function Presentation() {
  return (
    <div>
      <div className="w-full h-full justify-center items-center  text-center text-white bg-baramey-orange">
        <div className="text-3xl ">
          <h1 className="font-extrabold py-10 ">Dégustez!</h1>
          <p className="uppercase font-semibold">
            spécialité <br /> cambodgienne
          </p>
        </div>

        <div className="relative py-10">
          <img src="/boeuf-sansbg.png" alt="boeuf-sansbg" />
          <p className="absolute top-14 text-2xl bg-black/90 shadow-2xl rounded-full p-6 -rotate-12 left-14  font-bold font-gagalin">
            Bobun
            <br />
            10€50
          </p>
        </div>
        <p className="text-xl pb-7 font-semibold  mx-20">
          VERMICELLES DE RIZ, BOEUF SAUTÉ AU CURRY JAUNE, SOJA, SALADE, MENTHE,
          CORIANDRE, BASILIC, CACAHOUÈTES, OIGNONS FRITS, SAUCE MAISON.
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
    </div>
  );
}
