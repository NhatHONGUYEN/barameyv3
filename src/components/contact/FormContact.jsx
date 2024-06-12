import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function FormContact() {
  return (
    <div className="py-10 ">
      <div className="mx-8 p-6  bg-white rounded-md border-2  shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 uppercase">
          Contacter Nous
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 bg-gray-100"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 bg-gray-100"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 bg-gray-100"
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 uppercase"
            >
              envoyer
            </button>
          </div>

          <div className="pt-32">
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
        </form>
      </div>
    </div>
  );
}
