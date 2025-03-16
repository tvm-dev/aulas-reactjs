import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import "./App.css"; // Importando estilos

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
};

export default App;
