import Hamburger from "hamburger-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Banner from "../Banner";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="h-16 w-full z-50 flex justify-between items-center text-white bg-black p-4">
      <Link to={"/home"}>
        <img
          className="object-contain  h-10 w-full"
          src="/BARAMEY-LOGO_YELLOW.png"
          alt="logo_baramey"
        />
      </Link>
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <AnimatePresence>{isOpen && <BurgerMenu />}</AnimatePresence>
      </div>
      <div>
        <Link to={"/home"} className="ml-4">
          Acceuil
        </Link>
        <a
          href="https://cdn.website.dish.co/media/a9/ce/7590335/Menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          Menu
        </a>
        <Link to={"/contact"} className="ml-4">
          Contact & accès
        </Link>
      </div>
      <Banner />
    </div>
  );
}
