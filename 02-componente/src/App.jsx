//Criando um componente em ReactJS:

//importando componentes que criei:
import Titulo from "./components/Titulo"


function App() {
  //return <h1>Olá Mundo!</h1>
  //return <Titulo />
  //Para colocar mais de um componente:

  return (
    <div>
      <Titulo />
      <Titulo />
      <Titulo />
    </div>
  )
}

export default App