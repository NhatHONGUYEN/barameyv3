import Hamburger from "hamburger-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="h-16 w-full flex justify-between items-center text-white bg-black p-4">
      <Link to={"/home"}>
        <img
          className="object-contain  h-12 w-full"
          src="/BARAMEY-LOGO_YELLOW.png"
          alt="logo_baramey"
        />
      </Link>
      <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <AnimatePresence>{isOpen && <BurgerMenu />}</AnimatePresence>
      </div>
    </div>
  );
}
