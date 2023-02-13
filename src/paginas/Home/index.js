import Topo from "../../componentes/topo";
import Footer from "../../componentes/rodape";
import Banner from "../../componentes/Banner";
import "./home.css";
const Home = () => (
  <div>
    <Topo />
    <main>
      <Banner />
      <section>
        <div className="limitasecao boxcards">
          <img
            className="cards img"
            src="assets/banner-sabores.jpg"
            alt="nossos-sabores"
          />
          <div className="cards">
            <h2>Nossos Sabores</h2>
            <span>Novos e deliciosos</span>
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              gelateria todos os nossos produtos são naturais, á base de frutas
              e sem nenhum conservante! Também temos opções sem lactose e sem
              açucar. venha conhecer e perceber que tem como o sorvete ser
              delicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="limitasecao boxcards reverso">
          <img
            src="assets/eventos-image.jpg"
            alt="banner-evento"
            className="cards img"
          />
          <div className="cards">
            <h2>Nossos Eventos</h2>
            <span>Delicias com sorvete!</span>
            <p>
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvetes sa sua vida! Venha nos conhecer e passar um
              tempo aqui com a gente.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="limitasecao boxcards">
          <img
            src="assets/banner-sobre.png"
            alt="banner-sobre"
            className="cards img"
          />
          <div className="cards">
            <h2>Sobre Nós</h2>
            <span>Alegria em cada conquista!</span>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar de fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Home;
