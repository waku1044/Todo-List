import './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgPrevent from '../../assets/Img/bottonPrevent.svg'


const InitialValues = {
    userName:'',
    password:'',
}
const Login = ()=>{
    const [state, setState] = useState({InitialValues});
    const [error, setError] = useState({});
    const navegate = useNavigate();

    console.log(localStorage.getItem('user'),localStorage.getItem('password'))

    const handleChange = (e)=>{
            setState({...state,[e.target.name]: e.target.value})       
    }
    
    const validar = ()=>{
        let errorList = {};
        let userRegis = localStorage.getItem('user');
        let passRegis = localStorage.getItem('password');
        if(!state.userName)
        errorList = {...errorList, user:'Campo obligatorio.'}
        else if(state.userName !== userRegis)
        errorList = {...errorList, user:'Usuario o Contraseña no registrado.'}
        if(!state.password)
        errorList = {...errorList, password:'Campo obligatorio'}
        else if(state.password !== passRegis)
        errorList = {...errorList, password:'Usuario o Contraseña no registrado.' }
        
        return errorList;        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let errores = validar();
        if(Object.keys(errores).length < 1){
            navegate('/home');
        }
        setError(errores);

    }


    return <div className="login bg-dark pt-5">
        <Link to='/' ><img src={imgPrevent} alt="" className='ms-4 mb-4' /></Link>
        <h2 className='text-white ms-5 mt-5'>Login</h2>
        <form action="" className='mt-5 d-flex flex-column justify-content-around gap-1 w-75 mx-auto' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className='text-white'>Usuario</label>
                <input 
                type="text" 
                name='userName'
                placeholder='Enter your Username' 
                className=''
                value={state.userName}
                onChange={handleChange}
                
                />
                {error.user && <p className='errorText'>{error.user}</p>}
            </div>

            <div>
                <label htmlFor="usepassword" className='text-white'>Password</label>
                <input type="password"
                name='password' 
                placeholder='Enter your Password' 
                className=''
                value={state.password}
                onChange={handleChange}
                
                />
            {error.password && <p className='errorText'>{error.password}</p>}
            </div>

            <button type='submit' className='btn mx-auto w-75'>Ingresar</button >
        </form>
    </div>
}

export default Login;