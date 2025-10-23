import { useMemo } from "react"
import type { OrderItem } from "../types"
import { FormatCurrency } from "../Helpers"

type OrderTotalsProps = {
  order : OrderItem[]

}

export default function OrderTotals({order}:  OrderTotalsProps)  {

const SubtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0) , [order])

  return (

    <>
    <div className="space-y-4 bg-sky-300 p-5 rounded-2xl shadow-lg border border-sky-200">

        <h2 className="text-center font-black text-2xl"> Totales Y Propinas</h2>

        <div className="space-y-2">

        <p> Subtotal a Pagar: {''}

            <span className="font-semibold">{FormatCurrency(SubtotalAmount)}</span>

        </p>

        <p> Propina: {''}

            <span className="font-semibold"> $0</span>

        </p>

        <p className="flex justify-between text-xl font-bold"> Total a Pagar: {''}

            <span className="font-bold"> $0</span>

        </p>

        </div>
    </div>

    </>

  )
}
