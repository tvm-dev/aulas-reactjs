import './App.css'
import Titulo from "./components/Titulo"

function App() {
  
  return (
    
      <div>
      <Titulo
        nome="Thiago Viana"
        paragrafo={"fdsfsfsdfs sdf sdfsdfsdfsdfsdfsdfds"}
        cor="red"
        bg="black"
      />
      <Titulo
        nome="Thiago M"
        paragrafo={true}
        cor="purple"
        bg="red"
      />
      
      <Titulo />
      
      <Titulo
        nome="Paulo da Silva"
        paragrafo={true}
        cor="blue"
        bg="yellow"
      />
      
      </div>
  )
}

export default App
