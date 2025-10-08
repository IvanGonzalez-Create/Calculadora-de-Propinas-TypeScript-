import { menuItems } from "../src/data/DataBase"
import  MenuItems  from "../src/components/MenuItems"


function App() {
  
  return (

    <>
    <header className=" bg-teal-400 py-5 ">
      <h1 
      className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center leading-tight"
      >Calculadora de Propinas y Consumo
      </h1>
    </header>
  
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
  <div>
     
      <h2>Menu</h2>

      {menuItems.map(item => (
        <MenuItems 
        />
  
      ))}

      
      
  </div>


  
  <div>
    
    <h2>Consumo</h2> 

  </div>

    </main>
    </>

  )
}

export default App
