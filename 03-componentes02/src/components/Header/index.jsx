import "./header.css";



export const Header = () => {
  return (
    <header className="header">
      <h1>Meu Projeto</h1>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};