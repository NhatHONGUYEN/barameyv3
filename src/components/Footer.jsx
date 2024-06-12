export default function Footer() {
  return (
    <div className="w-full h-full  text-center text-white bg-black">
      <div>
        <div className="w-40 mx-auto">
          <img src="/BARAMEY-LOGO2_YELLOW.png" alt="BARAMEY-LOGO2_YELLOW" />
        </div>

        <div className="">
          <h1 className="text-2xl font-bold uppercase ">Baramey traiteur</h1>
          <p className="py-4">
            29 AV WINSTON CHURCHILL <br /> 27400 LOUVIERS France
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase ">Horaires</h1>
          <div className="py-4">
            <p className="font-bold">Du lundi au vendredi: </p>
            <p>
              <span className="underline">Midi</span> : de 11:30h à 14h
            </p>
            <p>
              <span className="underline">Soir</span> : de 18h à 21h
            </p>
            <p className="font-bold">Le samedi: </p>
            <p>
              <span className="underline">Midi</span> : de 11:30h à 14h
            </p>
            <p className="font-bold">Fermé le dimanche</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl pt-16 font-bold uppercase ">
            réservations <br /> commandes
          </h1>
          <p className="text-baramey-orange  py-4 text-xl font-bold">
            Tél. : 09 77 85 37 67
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
