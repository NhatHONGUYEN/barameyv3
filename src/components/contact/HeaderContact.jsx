export default function HeaderContact() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <img src="/girlphone.jpg" alt="girlphone" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="mx-8">
          <h1 className="text-3xl p-4 font-semibold">
            Découvrez les saveurs authentiques du Sud-Est asiatique avec nous !
          </h1>
          <p className="text-xl  p-4">
            Commandez à emporter dès maintenant et dégustez la cuisine
            cambodgienne et thaïlandaise authentique préparée avec soin.
          </p>
        </div>
      </div>
    </div>
  );
}
