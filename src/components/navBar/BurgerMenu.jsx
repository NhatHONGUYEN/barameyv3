import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  return (
    <motion.div
      className="absolute z-50 top-16 right-0  h-48 uppercase bg-baramey-orange font-semibold flex text-center text-white 
      justify-center items-center
      w-full
      
      "
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex flex-col  pt-9 mx-4">
        <Link to={"/home"} className="py-2">
          Acceuil
        </Link>
        <a
          href="https://cdn.website.dish.co/media/a9/ce/7590335/Menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2"
        >
          Menu
        </a>
        <Link to={"/contact"} className="py-2">
          Contact
        </Link>
      </ul>
    </motion.div>
  );
}
