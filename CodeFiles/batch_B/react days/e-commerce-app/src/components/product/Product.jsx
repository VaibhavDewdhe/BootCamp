import './Product.css'

export default (product)=>{
    return <div>
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <h5>{product.price}</h5>
        <p>{product.description}</p>
        <button onClick={product.inc}>+</button>
    </div>
}