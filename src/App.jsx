import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Order from "./components/Order";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
