import './footer.css'
export default function Rodape() {
  return (
    <footer>
      <div className="boxfooter">
        <img src="assets/logo.png" alt="logo" className='logo'/>
        <div className='boxcardfooter'>
          <h3>endereço</h3>
          <p>AV. Bernardino de campos,98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className='boxcardfooter'>
          <h3>contato</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className='boxcardfooter'>
          <h3>horarios</h3>
          <p>Aberto todos os dias</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <p className='txtdesenvolvedor'>Gelateria. Orgulhosamente desenvolvida por Wander Rosa</p>
    </footer>
  );
}
