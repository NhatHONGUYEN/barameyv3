import FadeInOutInstant from "../../animation/FadeInOutInstant.jsx";
export default function HeaderContact() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <img
        src="/girlphone.jpg"
        alt="girlphone"
        className="w-full h-full md:h-screen   object-cover xl:top-16"
      />

      <FadeInOutInstant>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8 xl:w-2/3 xl:mx-auto gap-12   ">
          <h1 className="text-3xl md:text-4xl md:mx-20 lg:text-5xl font-semibold mb-42 xl:text-6xl 2xl:w-3/5">
            Découvrez les saveurs authentiques du Sud-Est de l'Asie à travers
            nos plats! !
          </h1>
          <p className="py-2 mx-10 md:text-2xl lg:text-4xl xl:mx-24 ">
            Commandez dès maintenant à emporter, <span>uniquement</span> par
            téléphone.
          </p>
        </div>
      </FadeInOutInstant>
    </div>
  );
}
