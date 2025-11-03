import { useMemo } from "react"
import type { OrderItem } from "../types"
import { FormatCurrency } from "../Helpers"

type OrderTotalsProps = {
  order : OrderItem[]
  tip : number
  SaveOrder: () => void
}

export default function OrderTotals({order,tip, SaveOrder}:  OrderTotalsProps)  {




const SubtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0) , [order])
const TipAmount = useMemo(() => SubtotalAmount * tip, [tip, order])
const TotalAmount = useMemo(() => SubtotalAmount + TipAmount, [tip, order])


  return (

    <>
    <div className="space-y-4 bg-sky-300 p-5 rounded-2xl shadow-lg border border-sky-200">

        <h2 className="text-center font-black text-2xl"> Totales Y Propinas</h2>

        <div className="space-y-2">

        <p> Subtotal a Pagar: {''}

            <span className="font-semibold">{FormatCurrency(SubtotalAmount)}</span>

        </p>

        <p> Propina: {''}

            <span className="font-semibold">{FormatCurrency(TipAmount)}</span>

        </p>

        <p className="flex justify-between text-xl font-bold"> Total a Pagar: {''}

            <span className="font-bold">{FormatCurrency(TotalAmount)}</span>

        </p>

        </div>
        
    </div>

    <button
    className = "cursor-pointer w-full bg-black p-3 uppercase text-white font-bold margin-top-10 disabled:opacity-40"
    disabled = {TotalAmount === 0}
    onClick={SaveOrder}
    >
    
          Guardar Orden
    </button>

    </>

  )
}
