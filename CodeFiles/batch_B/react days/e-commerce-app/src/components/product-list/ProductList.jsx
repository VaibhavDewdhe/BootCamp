import { useEffect, useState } from "react"
import Product from "../product/Product"
import './ProductList.css'
export default ({ inc }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return <div>
        <h2>Product List</h2>
        {/* <Product name="Iphone 11" price={50000} />
        <Product name={product.name} price={product.price} />
        <Product {...product} /> */}


        <div id="products">
            {products.map(p => <Product inc={inc} key={p.id} {...p} />)}
        </div>
    </div>
}