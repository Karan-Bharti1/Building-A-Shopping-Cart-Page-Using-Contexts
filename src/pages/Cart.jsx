import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useCartContext } from "../contexts/CartContext";

const Cart=()=>{
    const {productsData}=useCartContext()
    const itemsInCart=productsData.filter(item=>item.isInCart)
    console.log(itemsInCart)
    const subtotal=itemsInCart.reduce((acc,curr)=>acc+curr.price,0).toFixed(2)
    const displayItemsInCart=itemsInCart.map(item=>(
        <div className="col-md-6 my-2" key={item.id}>
        <div className="card ">
        <div className="row">
           
            <div className="col-md-4">
                <img src={item.imageURL} className="img-fluid cart-image"/>
                </div>
                <div className="col-md-8">
                    <p className="fs-4 fw-bold text-danger">{item.name}</p>
                    <p>${item.price}</p>
                </div>
            </div>
        </div></div>
    ))
const NoItemsInCart=()=>{
return(<>
  <h2 className="text-center py-2">Empty Cart</h2>
                <p className="text-center fs-5 py-2">No Products in your cart</p>
                <div className="text-center">
                <Link to="/" className="btn btn-danger">Explore Us</Link>
                </div>
</>)
}
    return(
        <>
        <Nav/>
        <main className="container">
          {itemsInCart.length>0 && ( <>
          <h2 className="text-center py-2">Your Cart</h2>
          <div className="row">{displayItemsInCart}</div>
            <hr/>
            <h2>Subtotal:  ${subtotal}/-</h2></>)}
            {
                itemsInCart.length===0 &&(<>
              <NoItemsInCart/>
                </>)
            }
        </main>
        </>
    )
}
export default Cart;