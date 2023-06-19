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
    const navegate = useNavigate();

    const handleChange = (e)=>{
        e.preventDefault();
        setState({...state,[e.target.name]: e.target.value})
        console.log({...state,[e.target.name]: e.target.value})
        navegate('/home');
    }



    return <div className="login bg-dark ">
        <Link to='/' ><img src={imgPrevent} alt="" className='mb-5' /></Link>
        <h2 className='text-white ms-5 mt-5'>Login</h2>
        <form action="" className='mt-5 d-flex flex-column justify-content-around gap-1 w-75 mx-auto'>
            <label htmlFor="username" className='text-white'>Username</label>
            <input 
            type="text" 
            name='username'
            placeholder='Enter your Username' 
            className='mb-5'
            value={state.userName}
            onBlur={handleChange}
            required
            
            
            />

            <label htmlFor="usepassword" className='text-white'>Password</label>
            <input type="password"
             name='password' 
             placeholder='Enter your Password' 
             className='mb-5 '
             value={state.password}
             onBlur={handleChange}
             required
             />

            <button type='submit' className='btn mx-auto w-75'>Login</button >
        </form>
    </div>
}

export default Login;