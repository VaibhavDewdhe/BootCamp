import './Product.css'

export default (props) => {
    return (
        <div id='product'>
            <div id='mainDetail'>
                <img src={props.image} alt="" />
                <h5>{props.price}</h5>
                <p id='title'>{props.title}</p>
                <button className='btn btn-primary'>Add to Cart</button>
            </div>
            <p>{props.description}</p>
        </div>
    )
}