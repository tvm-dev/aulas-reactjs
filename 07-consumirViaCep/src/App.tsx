import { useState } from "react";
import CepForm from "./components/CepForm";
import CepInfo from "./components/CepInfo";
import { CepData } from "./types";
import "./index.css";

const App: React.FC = () => {
  const [cepData, setCepData] = useState<CepData | null>(null);

  const fetchCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: CepData = await response.json();
      setCepData(data);
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setCepData(null);
    }
  };

  return (
    <div className="container">
      <h1>Consulta de CEP</h1>
      <CepForm onSearch={fetchCep} />
      <CepInfo data={cepData} />
    </div>
  );
};

export default App;
