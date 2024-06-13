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
          <a
            href="https://www.facebook.com/baramey.louviers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialFacebook className="bg-baramey-orange  rounded-full  p-4" />
          </a>
          <a
            href="https://www.instagram.com/baramey.louviers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="ml-4 bg-baramey-orange rounded-full  p-4" />
          </a>
        </div>
      </div>
    </FadeInOut>
  );
}
