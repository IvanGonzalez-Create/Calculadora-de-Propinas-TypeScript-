export type Foods = {
    
    id: number
    name: string
    price: number
}


export type OrderItem = Foods & {

    quantity: number
}