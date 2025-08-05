import CartItems from "../cart-items/CartItems"
import Navbar from "../navbar/Navbar"
import ProductList from "../product-list/ProductList"
import './Dashboard.css'
export default () => {
    return <div id="dash">
        <Navbar />
        <CartItems />
        <ProductList />
    </div>
}