import { useState } from "react";
import FadeInOut from "../../../animation/FadeInOut";
import FormRightSide from "./FormRightSide";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_ltf7rwn",
        "template_zno7de9",
        formData,
        "7yg3SA_dmgQ7G_1bD"
      );

      setFormData({ name: "", email: "", message: "" });
      toast.success("Message envoyé avec succès!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    }
  };

  return (
    <div className="py-10 lg:w-2/3 lg:mx-auto xl:w-2/4  ">
      <FadeInOut>
        <div className="mx-8 p-6  bg-white rounded-md border-2  shadow-xl">
          <h2 className="text-2xl 2xl:text-4xl 2xl:py-10 font-semibold mb-4 uppercase">
            Contactez Nous
          </h2>
          <form onSubmit={handleSubmit} className="md:grid grid-cols-2 gap-4">
            <div className="grid-cols-1">
              <FormRightSide />
            </div>
            <div className="grid-cols-1 2xl:text-2xl">
              <div className="mb-4 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
            </div>
          </form>
        </div>
      </FadeInOut>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
