import './style.css';


const Button =(props)=> {
    
    console.log(props)
    return <button 
    className='btn btn-outline-success w-50'
    style={{
        background:props.bg,
        margin:props.margin
    }}
    >
    {props.titulo}</button>
}

export default Button;