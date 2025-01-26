import { Link } from "react-router-dom";
import CartCounter from "./CartCounter";

const Nav=()=>{
return(
    <header>
        <div className="d-flex justify-content-between container pt-2">
            <h2 className="text-danger">SmartGrocer</h2>
            <nav className="nav">
                <Link className="nav-link" to="/">Products</Link>
                <Link className="nav-link" to="/cart">Cart (<CartCounter/>)</Link>
            </nav>
        </div>
        <hr/>
    </header>
)
}
export default Nav;