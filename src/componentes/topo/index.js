import { Link } from "react-router-dom";
import './Topo.css'
export default function Topo() {
  return (
    <header>
      <div className="limitasecao topo">
        <img src="/public/assets/logo.png" alt="logo"></img>
        <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Sobre"}>Sobre</Link>
        <Link to={"/Sabores"}>Sabores</Link>
        </nav>
      </div>
    </header>
  )
}
