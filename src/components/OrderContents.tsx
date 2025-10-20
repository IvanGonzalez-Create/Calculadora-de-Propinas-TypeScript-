import type { Foods, OrderItem } from "../types"
import { FormatCurrency } from "../Helpers"

type OrderProps = {
    order : OrderItem[],
    DropElementToOrder : (id : Foods["id"]) => void
}

export default function OrderContents({order, DropElementToOrder} : OrderProps)  {



  return (


    <div>

        <h1 className="text-4xl font-semibold text-sky-700 tracking-wide uppercase border-b-2 border-sky-300 pb-1 mb-4">consumo</h1>


        <div>
            {order.length == 0 ? <p>La orden esta vacia</p> 
            : order.map(order =>
            <div 
            className="items-center bg-white rounded-lg border border-sky-200 shadow-sm px-5 py-3 hover:shadow-md transition-all duration-200"
            key={order.id}>

                <p className="text-sky-800 font-medium tracking-wide">

                  {order.name} - {FormatCurrency(order.price)} Unidad 

                </p>

                <p className="text-teal-950 font-semibold text-right">

                  Cantidad: {order.quantity} - {FormatCurrency(order.price * order.quantity)}

                </p>
                <button
                className=" text-red-600 hover:scale-120 transition-all duration-150 font-bold cursor-pointer"
                onClick={() => DropElementToOrder(order.id)}
                
                >
                  X

                </button>

            </div>
            )
        }
 

        </div>

    </div>

    
 
    

  )
}
