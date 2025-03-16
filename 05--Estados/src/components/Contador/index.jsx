import React, { useState } from "react";

const ContadorInteligente = () => {
    const [contador, setContador] = useState(0);
    const [historico, setHistorico] = useState([]);

    const MAX = 10;
    const MIN = 0;

    const incrementar = () => {
        if (contador < MAX) {
            const novoValor = contador + 1;
            setContador(novoValor);
            setHistorico([...historico, novoValor]);
        }
    };

    const decrementar = () => {
        if (contador > MIN) {
            const novoValor = contador - 1;
            setContador(novoValor);
            setHistorico([...historico, novoValor]);
        }
    };

    const resetar = () => {
        setContador(0);
        setHistorico([]);
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h1>Contador Inteligente</h1>
            <h2 style={{ fontSize: "3rem", color: "blue" }}>{contador}</h2>

            <button onClick={decrementar} disabled={contador === MIN}>-</button>
            <button onClick={incrementar} disabled={contador === MAX}>+</button>
            <button onClick={resetar}>Resetar</button>

            <h3>Histórico:</h3>
            <ul>
                {historico.map((valor, index) => (
                    <li key={index}>{valor}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContadorInteligente;
