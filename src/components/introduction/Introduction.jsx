export default function Introduction() {
  return (
    <div className="relative">
      <div className="relative">
        <img
          className="w-full"
          src="/samoussas au boeuf.jpg"
          alt="samoussas au boeuf.jpg"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col py-11 items-center text-center mx-10 text-white justify-center">
          <h1 className="text-xl py-2 uppercase font-extrabold font-gagalin">
            Traiteur spécialisé en plats cambodgiens et thaï
          </h1>
          <p className="py-2">
            Venez goûter à nos plats fait maison pour vous apporter un voyage
            culinaire dans le sud-est asiatique grâce à un savoir-faire
            familiale et artisanale !
          </p>
          <button className="py-4 px-4 border border-white rounded-none uppercase transition-all duration-300 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-white/20 hover:border-transparent">
            Découvrez le restaurant
          </button>
        </div>
      </div>
    </div>
  );
}
