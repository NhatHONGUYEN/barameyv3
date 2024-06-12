export default function Home() {
  return (
    <div>
      <div className="relative -z-10">
        <img
          className="w-full"
          src="/photoshoot_for_baramey_piquant.jpg"
          alt="photoshoot_for_baramey_piquant.jpg"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center  text-center mx-10 text-white justify-center">
          <h1 className="text-4xl">
            Traiteur spécialisé en plats cambodgiens et thaï
          </h1>
          <p>
            Venez goûter à nos plats fait maison pour vous apporter un voyage
            culinaire dans le sud-est asiatique grâce à un savoir-faire
            familiale et artisanale !
          </p>
          <p>Découvrez le restaurant</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
