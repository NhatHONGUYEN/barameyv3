import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function FormRightSide() {
  return (
    <div>
      <div className="flex py-4">
        <FaMapMarkerAlt className="text-2xl text-baramey-orange " />
        <p className="pl-4">
          <p className="text-2xl ">Adresse </p>
          <br />
          <p className="text-lg">
            29, AV WINSTON CHURCHILL <br /> 27400 LOUVIERS France
          </p>
        </p>
      </div>
      <div className="flex py-4">
        <FaPhoneAlt className="text-2xl text-baramey-orange " />
        <p className="pl-4">
          <p className="text-2xl  ">Téléphone </p>
          <br /> <p className="text-lg font-bold">09 77 85 37 67</p>
        </p>
      </div>
    </div>
  );
}
