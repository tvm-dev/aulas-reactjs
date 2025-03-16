import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Função para tocar som
  const playSound = (fileName) => {
    const sound = new Audio(process.env.PUBLIC_URL + `/sounds/${fileName}`);
    sound.play().catch((err) => console.error("Erro ao tocar som:", err));
  };

  return (
    <div className="counter-container">
      <h1>Contador</h1>
      <span className="counter-value">{count}</span>
      <div className="button-group">
        <button
          className="btn increase"
          onClick={() => {
            setCount(count + 1);
            playSound("increase.mp3"); // Som ao aumentar
          }}
        >
          +
        </button>
        <button
          className="btn decrease"
          onClick={() => {
            setCount((prev) => Math.max(prev - 1, 0));
            playSound("decrease.mp3"); // Som ao diminuir
          }}
        >
          -
        </button>
      </div>
      <button
        className="btn reset"
        onClick={() => {
          setCount(0);
          playSound("reset.mp3"); // Som ao zerar
        }}
      >
        Zerar
      </button>
    </div>
  );
}
