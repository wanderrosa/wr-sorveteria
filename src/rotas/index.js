import Home from "../paginas/Home";
import Sobre from "../paginas/Sobre";
import Sabores from "../paginas/Sabores";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/Sobre" element={<Sobre />}></Route>
      <Route path="/Sabores" element={<Sabores />}></Route>
    </Routes>
  </BrowserRouter>
);
export default Rotas;
