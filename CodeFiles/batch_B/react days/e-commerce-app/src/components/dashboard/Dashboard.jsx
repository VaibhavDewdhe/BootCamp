import { useState } from 'react';
import CartItems from '../cart-items/CartItems';
import Navbar from '../navbar/Navbar';
import ProductList from '../product-list/ProductList';
import './Dashboard.css';

export default ()=>{
    const [noOfItems, setNoOfItems] = useState(0);

    function increment(){
        setNoOfItems(noOfItems+1);
    }

    return <div id="parent">
        <Navbar noOfItems={noOfItems}/>
        <div id='container'>
            <ProductList inc={increment}/>
            <CartItems/>
        </div>
    </div>
}