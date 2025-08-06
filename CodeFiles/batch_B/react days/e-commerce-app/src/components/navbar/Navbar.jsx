import './Navbar.css';

export default (props)=>{
    return <div>
        <button className='btn btn-primary'>Cart {props.noOfItems}</button>
    </div>
}