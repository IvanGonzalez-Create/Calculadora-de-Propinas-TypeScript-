import type { Foods } from "../types"

type MenuitemsProps = {
    item : Foods

}


export default function MenuItems({item} : MenuitemsProps) {




  return (

<button className="w-full flex justify-between items-center bg-white rounded-xl shadow-lg px-5 py-4 hover:shadow-2xl hover:bg-sky-50 transition-all duration-300">
  <p className="text-sky-800 font-medium">{item.name}</p>
  <p className="text-sky-700 font-semibold">${item.price}</p>
</button>


  )
}
