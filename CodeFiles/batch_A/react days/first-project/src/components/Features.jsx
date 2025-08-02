export default (props)=>{
    return <ol>
        {props.features.map(ele => <li>{ele}</li>)}
    </ol>
}