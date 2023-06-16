import './style.css';


const Button =(props)=> {
    
    console.log(props)
    return <button 
    className='btn btn-outline-success w-50 my-3'
    style={{
        background:props.bg
    }}
    >
    {props.titulo}</button>
}

export default Button;