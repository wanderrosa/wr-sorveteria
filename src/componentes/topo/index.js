import { Link } from "react-router-dom";
export default function Topo() {
  return (
    <header>
      <div>
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
