import type { Foods } from "../types"

type MenuitemsProps = {
    item : Foods,
    addItem: (element : Foods) => void

}


export default function MenuItems({item, addItem} : MenuitemsProps) {




  return (

    

<button className="w-full flex justify-between items-center bg-white rounded-xl shadow-lg px-5 py-4 hover:shadow-2xl hover:bg-sky-300 transition-all duration-50"

onClick = {() => addItem(item)}
>
  <p className="text-sky-800 font-medium">{item.name}</p>
  <p className="text-sky-700 font-semibold">${item.price}</p>
</button>


  )
}
