import { useState } from "react"
import type { Foods, OrderItem } from "../types"



export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])


    function addItem(element : Foods) {

        const ItemExist = order.find(orderItem => orderItem.id == element.id)

        if (ItemExist) {
            const UpdatedItem = order.map(orderItem => orderItem.id == element.id ? 
                {...orderItem, quantity : orderItem.quantity + 1} : orderItem )
           
            setOrder(UpdatedItem)

        } else {          
                const NewTypeItem : OrderItem = {...element , quantity : 1}
                setOrder([...order, NewTypeItem])
            }
    }

    function DropElementToOrder(id : Foods["id"]) {

        setOrder(order.filter(ItemOrder => ItemOrder.id !== id))

    }


    return{
        order,
        addItem,
        DropElementToOrder

    }




}