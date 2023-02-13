import { Link } from "react-router-dom";
import "./Topo.css";
export default function Topo() {
  return (
    <header className="boxtopo">
      <div className="limitasecao topo">
      <img src="assets/logo.png" alt="logomarca" className="logo"/>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/Sobre"}>Sobre</Link>
          <Link to={"/Sabores"}>Sabores</Link>
        </nav>
      </div>
    </header>
  );
}
