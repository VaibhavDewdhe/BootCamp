import './Product.css'

export default (product)=>{
    return <div>
        <h3>{product.name}</h3>
        <h5>{product.price}</h5>
        <button onClick={product.inc}>+</button>
    </div>
}