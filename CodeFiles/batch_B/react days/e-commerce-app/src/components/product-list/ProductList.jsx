import Product from "../product/Product"

const product = {
    name: "Samsung S25",
    price: 125000
}

const products = [
    {
        id : 1,
        name: "Samsung S25",
        price: 125000
    },
    {
        id : 2,
        name: "Samsung S25",
        price: 125000
    },
    {
        id : 3,
        name: "Samsung S25",
        price: 125000
    },
]



export default ({inc}) => {
    return <div>
        <h2>Product List</h2>
        {/* <Product name="Iphone 11" price={50000} />
        <Product name={product.name} price={product.price} />
        <Product {...product} /> */}


        {products.map(p=><Product inc={inc} key={p.id} {...p} />)}
    </div>
}