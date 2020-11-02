
export const AddToCart=(items,newItem)=>{

    const isItemExists=items.find(item=>newItem.id===item.id);
     
    return isItemExists?
      items.map(item=>item.id===newItem.id? {...item,quantity:item.quantity+1}:item ) 
      :
     [...items,{...newItem,quantity:1}]
}

export const removeFromCart=(items,removedItem)=>{
  const isItemExists=items.find(item=>removedItem.id===item.id);

  return isItemExists.quantity===1 ?
      items.filter(item=> item.id!==removedItem.id)
      :
      items.map(item=> item.id!==removedItem.id ? item : {...item, quantity:item.quantity-1})

}
