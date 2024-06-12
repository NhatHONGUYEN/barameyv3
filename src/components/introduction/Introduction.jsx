export default function Introduction() {
  return (
    <div className="relative">
      <div className="relative ">
        <video
          src="/intro-rice.mp4"
          muted
          autoPlay
          loop
          controls={false}
          className="object-cover w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]"
        ></video>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col py-11 items-center text-center text-white justify-center">
          <h1 className="text-2xl mx-16  py-4 uppercase font-extrabold font-gagalin">
            Traiteur spécialisé en plats cambodgiens et thaï
          </h1>
          <p className="py-2 mx-10">
            Venez goûter à nos plats fait maison pour vous apporter un voyage
            culinaire dans le sud-est asiatique grâce à un savoir-faire
            familiale et artisanale !
          </p>
        </div>
      </div>
    </div>
  );
}
