import Hamburger from "hamburger-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="h-16 w-full flex justify-between items-center text-white bg-black p-4">
      <div>
        <img
          className="object-contain  h-12 w-full"
          src="../../public/BARAMEY-LOGO_YELLOW.png"
          alt="logo_baramey"
        />
      </div>
      <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 right-0 w-2/4 h-64 bg-black flex"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7 }}
            >
              <ul className="flex flex-col w-60 pt-9 mx-4">
                <li className="py-2">Acceuil</li>
                <li className="py-2">Menu</li>
                <li className="py-2">Contact & accès</li>
                <li className="py-2">Commander</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
