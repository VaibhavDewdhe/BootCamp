export default function Product(props) {

    let a = [10, 20, 40];
    return <div>
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>
        <ul>
            {props.features.map((ele) => <li>{ele}</li>)}
        </ul>
    </div>
}
// export default Product;

// export default ()=>{

// }
// const Product = function (){

// }

// export default Product;

// const Product = ()=>{

// }

// export default Product;


