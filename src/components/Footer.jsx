import FadeInOut from "../animation/FadeInOut";

export default function Footer() {
  return (
    <div className="w-full h-full text-center text-white bg-black">
      <FadeInOut>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 justify-items-center">
          <div className="mx-auto">
            <img
              className="mx-auto w-1/2 lg:w-4/5 2xl:w-2/5"
              src="/BARAMEY-LOGO2_YELLOW.png"
              alt="BARAMEY-LOGO2_YELLOW"
            />
          </div>
          <div>
            <h1 className="text-2xl md:pt-14 font-bold uppercase">
              Baramey traiteur
            </h1>
            <p className="py-4">
              29 AV WINSTON CHURCHILL <br /> 27400 LOUVIERS France
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold uppercase">Horaires</h1>
            <div className="py-4">
              <p className="font-bold">Du lundi au vendredi</p>
              <p>
                De 11:30 à 14:00 <br />
                et De 18h à 21h
              </p>
              <p className="font-bold pt-6">Le samedi</p>
              <p>De 11:30 à 14:00</p>
              <p className="font-bold">Fermé le dimanche</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl pt-16 font-bold uppercase">
              réservations <br /> commandes
            </h1>
            <p className="text-baramey-orange py-4 text-xl font-bold">
              Tél. : 09 77 85 37 67
            </p>
          </div>
        </div>
      </FadeInOut>
    </div>
  );
}
