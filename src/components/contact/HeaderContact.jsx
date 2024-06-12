import FadeInOut from "../../animation/FadeInOut";

export default function HeaderContact() {
  return (
    <div className="relative">
      <FadeInOut>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <img src="/girlphone.jpg" alt="girlphone" className="w-full" />
      </FadeInOut>
      <FadeInOut>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="mx-8">
            <h1 className="text-3xl p-4 font-semibold">
              Découvrez les saveurs authentiques du Sud-Est de l'Asie à travers
              nos plats! !
            </h1>
            <p className="text-xl  p-4">
              Commandez dès maintenant à emporter , <span>uniquement</span> par
              téléphone.
            </p>
          </div>
        </div>
      </FadeInOut>
    </div>
  );
}
