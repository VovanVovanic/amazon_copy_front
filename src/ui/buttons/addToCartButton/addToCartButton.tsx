import { FC } from "react"
import { ICartButton } from "./types"
import cn from 'classnames'
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { RiShoppingCartFill,RiShoppingCartLine } from 'react-icons/ri'
import { ICart } from "@/store/cart/types"
import { useQueryClient } from "@tanstack/react-query"

const AddToCartButton: FC<ICartButton> = ({ product, className, ...rest }) => {
 const { addToCart, removeFromCart } = useActions()
  const { items } = useTypedSelector((state) => state.cart)
 
 const currentElement = items.find((el: ICart) => el.product.id === product.id)
 
 const onCartHanlder = () => {
  currentElement ?
    removeFromCart({ id:currentElement.id }) :
   addToCart({
    product,
    quantity: 1,
    price: +product.price
   })
 }

 return (
  <button
   onClick={()=>onCartHanlder()}
   className={cn(className)} {...rest}>
    {currentElement ? <RiShoppingCartFill  className=""/> : <RiShoppingCartLine className=""/> }
  </button>
 )
}

export default AddToCartButton