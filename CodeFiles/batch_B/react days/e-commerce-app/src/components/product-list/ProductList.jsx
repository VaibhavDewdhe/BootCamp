import Product from "../product/Product"



export default ({inc}) => {
    return <div>
        <h2>Product List</h2>
        {/* <Product name="Iphone 11" price={50000} />
        <Product name={product.name} price={product.price} />
        <Product {...product} /> */}


        {products.map(p=><Product inc={inc} key={p.id} {...p} />)}
    </div>
}