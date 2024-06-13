import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  return (
    <motion.div
      className="absolute z-50 top-16 right-0 w-2/4 h-48 uppercase bg-black font-semibold flex text-center text-white border-t-4 "
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.7 }}
    >
      <ul className="flex flex-col w-60 pt-9 mx-4">
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
          Contact & accès
        </Link>
      </ul>
    </motion.div>
  );
}
