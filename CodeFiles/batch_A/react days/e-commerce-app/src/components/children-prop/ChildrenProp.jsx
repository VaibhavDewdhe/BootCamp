import './ChildrenProp.css'

export default ({children, xuz})=>{
    return <div id='parent'>

        {children}

        <h3>I am {xuz}</h3>
    </div>
}