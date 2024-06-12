import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  return (
    <motion.div
      className="absolute z-50 top-16 right-0 w-2/4 h-48 bg-black flex text-white border-t-4"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.7 }}
    >
      <ul className="flex flex-col w-60 pt-9 mx-4">
        <Link to={"/home"} className="py-2">
          Acceuil
        </Link>
        <Link to={"/menu"} className="py-2">
          Menu
        </Link>
        <Link to={"/contact"} className="py-2">
          Contact & accès
        </Link>
      </ul>
    </motion.div>
  );
}
