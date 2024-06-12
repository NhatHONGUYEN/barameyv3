import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import FadeInOut from "../../animation/FadeInOut";

export default function FollowContact() {
  return (
    <FadeInOut>
      <div className="mx-8 p-6 text-white text-center mb-12  bg-black rounded-sm ">
        <h1 className="text-3xl mx-4 font-bold py-6">
          Suivez le BARAMEY traiteur
        </h1>
        <p>
          Nous sommes présent sur les réseaux sociaux pour partager avec vous
          nos recettes, photos de plats, actus et autres bons plans. N’hésitez
          pas à partagez avec vos amis .
        </p>
        <div className="flex justify-center items-center py-8 text-7xl ">
          <TiSocialFacebook className="bg-baramey-orange  rounded-full  p-4" />
          <FaInstagram className="ml-4 bg-baramey-orange rounded-full  p-4" />
        </div>
      </div>
    </FadeInOut>
  );
}
