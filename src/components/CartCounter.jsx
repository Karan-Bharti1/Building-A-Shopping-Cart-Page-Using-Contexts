import { useCartContext } from "../contexts/CartContext";

const CartCounter=()=>{
    const {productsData}=useCartContext()
    const numberOfItemsInCart=productsData.filter(item=>item.isInCart).length
    return(<>
    {numberOfItemsInCart}
    </>)
}
export default CartCounter;