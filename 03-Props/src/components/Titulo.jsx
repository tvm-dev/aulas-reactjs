import './Titulo.css'

function Titulo({ nome, paragrafo, cor, bg }) {
    return (
        <div className="div01">
            
            {/* Sem If */}
            {/* <h1>Oi, eu sou {nome} </h1> */}
            
            {/* If ternário */}
            <h1 style={{color:cor}}>Oi, eu sou {nome ? nome : "Fulano"} </h1>

            
            {/* If ternário */}
            {paragrafo ?
                <p style={{background:bg}}>Este é o nosso parágrafo sobre receitas de bolo, vamos começar!</p> :
                <p>Nada</p>
            }
            </div>
    )
}
export default Titulo