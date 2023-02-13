import Topo from "../../componentes/topo";
import Footer from "../../componentes/rodape";
import "./sabores.css";
export default function Sabores() {
  return (
    <div>
      <Topo />
      <section className=" banner bannersabores">
        <h1>Nossos sabores</h1>
      </section>
      <section>
            <h2>sabores de sorvete</h2>
        <div className="limitasecao boxsabores">
            <div className="boxcardsabores">
                <img src="assets/sabor-oreo.png"alt="oreo"/>
                <span>Sorvete de Oreo</span>
                <p>Delicioso sorvete sabore 
                Oreo
                </p>
                <p>Uma explosão de sabor</p>
            </div>
            <div className="boxcardsabores">
                <img src="assets/sabor-pistache.png"alt="pistache"/>
                <span>Sorvete de Pistache</span>
                <p>Cremoso sorvete sabore 
                pistache com pedacinhos de semente
                </p>
            </div>
            <div className="boxcardsabores">
                <img src="assets/sabor-cookies-avela.png"alt="cookie"/>
                <span>Sorvete Cookies & Avelã</span>
                <p>O nosso melhor sorvete</p>
                <p>Voce vai adorar o sabor
                </p>
                
            </div>
            <div className="boxcardsabores">
                <img src="assets/sorbet-kiwi.png"alt="kiwi"/>
                <span>Sorvete de Kiwi</span>
                <p>Delicioso e refrescante sorvete sabor kiwi, rico em vitamina C
                </p>
                
            </div>
            <div className="boxcardsabores">
                <img src="assets/sorbet-morango.png"alt="morango"/>
                <span>Sorvete de Morango</span>
                <p>Sorvete de morango gurmet
                </p>
                <p>Tradicional e saboroso</p>
            </div>
            <div className="boxcardsabores">
                <img src="assets/sorbet-limao.png"alt="limao"/>
                <span>Sorvete de Limão Siciliano</span>
                <p>O incrivel sorvete gurmet de limão siciliano vai te encantar
                </p>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
