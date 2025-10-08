import { menuItems } from "../src/data/DataBase"
import  MenuItems  from "../src/components/MenuItems"


function App() {
  
  return (

    <>

    <header className=" bg-teal-400 py-5 ">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center leading-tight"
      >Calculadora de Propinas y Consumo
      </h1>
    </header>
  
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-12 px-4 ">

      <div>
     
      <h2 className="text-lg font-semibold text-sky-700 tracking-wide uppercase border-b-2 border-sky-300 pb-1">Menu</h2>
        <div className="space-y-4">
          {menuItems.map(item => (
            <MenuItems 
            key={item.id}
            item = {item}
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
