import type { OrderItem } from "../types"


type OrderProps = {
    order : OrderItem[]
}

export default function OrderContents({order} : OrderProps)  {



  return (


    <div>

        <h1 className="text-4xl font-semibold text-sky-700 tracking-wide uppercase border-b-2 border-sky-300 pb-1 mb-4">consumo</h1>


        <div>
            {order.length == 0 ? <p>La orden esta vacia</p> 
            : order.map(order =>
            <div key={order.id}>

                <p>{order.name}</p>

            </div>
            )
        }
 

        </div>

    </div>

    
 
    

  )
}
