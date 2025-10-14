import { menuItems } from "../src/data/DataBase"
import  MenuItems  from "../src/components/MenuItems"
import useOrder from "./hooks/useOrder"


function App() {

  const { addItem } = useOrder()
  
  return (

    <>

    <header className="bg-gradient-to-r from-sky-700 via-sky-500 to-sky-400 py-5">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight drop-shadow-lg"
      >Calculadora de Propinas y Consumo
      </h1>
    </header>
  
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-12 px-4 min-h-screen bg-gradient-to-b from-sky-100 to-sky-50 ">

      <div>
     
      <h2 className="text-4xl font-semibold text-sky-700 tracking-wide uppercase border-b-2 border-sky-300 pb-1 mb-4">Menu</h2>

        <div className="space-y-4">

          {menuItems.map(item => (
            <MenuItems 
            key = {item.id}
            item = {item}
            addItem = {addItem}
            />
          ))} 

        </div>  
      
      </div>


  
      <div>
    
          <h2>Consumo</h2> 

      </div>

  </main>
    
  </>

  )
}

export default App
