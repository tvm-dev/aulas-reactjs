import { useState } from "react";

interface CepFormProps {
  onSearch: (cep: string) => void;
}

const CepForm: React.FC<CepFormProps> = ({ onSearch }) => {
  const [cep, setCep] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{8}$/.test(cep)) {
      onSearch(cep);
    } else {
      alert("Digite um CEP válido com 8 números!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        maxLength={8}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default CepForm;
