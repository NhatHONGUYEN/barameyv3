import FadeInOutInstant from "../../animation/FadeInOutInstant.jsx";

export default function Introduction() {
  return (
    <div className="relative ">
      <div className="relative ">
        <video
          src="/intro-rice.mp4"
          muted
          autoPlay
          loop
          controls={false}
          className="object-cover w-full h-[500px] md:h-[600px] lg:h-[800px] xl:h-[1000px] 2xl:h-screen   "
        ></video>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <FadeInOutInstant>
          <div className="absolute inset-0 flex flex-col py-11 items-center text-center text-white justify-center sm:mx-20  lg:gap-12 xl:gap-16  ">
            <h1 className="text-2xl mx-16     py-4  uppercase font-extrabold font-gagalin md:text-4xl lg:text-5xl lg:mx-40 xl:mx-64 2xl:text-6xl 2xl:w-2/5 ">
              Traiteur spécialisé en plats cambodgiens et thaï
            </h1>
            <p className="py-2 mx-10 md:text-2xl lg:text-4xl xl:mx-24 2xl:mx-96">
              Venez goûter à nos plats fait maison pour vous apporter un voyage
              culinaire dans le sud-est asiatique grâce à un savoir-faire
              familiale et artisanale !
            </p>
          </div>
        </FadeInOutInstant>
      </div>
    </div>
  );
}
