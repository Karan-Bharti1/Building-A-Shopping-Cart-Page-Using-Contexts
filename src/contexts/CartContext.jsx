import { createContext, useContext,useState } from "react";
import products from "../Products";

const CartContext=createContext();
export const useCartContext=()=>useContext(CartContext)
export const CartProvider=({children})=>{
    const [productsData,setProductsData]=useState(products)
    const addToCartHandleCart=(id)=>setProductsData(prev=>prev.map(item=>item.id===id?{...item,isInCart:!item.isInCart}:item))
    const displayData=productsData.map(
        item=>(
          <div className='col-md-4 p-1 my-2' key={item.id}>
          <div  className='card border-0'>
      <img className='card-img-top' src={item.imageURL}/>
      <div className='d-flex justify-content-between'>
        <p className='fw-bold pt-2'>{item.name}</p>
        <p className='fw-bold pt-2'>${item.price}</p>
      </div>
      <button onClick={()=>addToCartHandleCart(item.id)} className='btn btn-danger'>{item.isInCart? "Remove from Cart":"Add to Cart"}</button>
          </div>
          </div>
        )
      )
    return (
      <CartContext.Provider value={{productsData,addToCartHandleCart,displayData}} >
  {children}
      </CartContext.Provider>
    )
  }
export default CartContext;