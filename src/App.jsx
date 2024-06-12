import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/navBar/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Error = lazy(() => import("./pages/Error"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
