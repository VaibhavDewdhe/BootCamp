import './Product.css'

export default (props) => {
    return (
        <div id='product'>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <h5>{props.price}</h5>
            <p>{props.description}</p>
        </div>
    )
}