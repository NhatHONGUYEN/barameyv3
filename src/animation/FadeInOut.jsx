import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInOut({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      {children}
    </motion.div>
  );
}
