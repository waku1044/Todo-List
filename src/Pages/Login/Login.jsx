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
       
        
    }
    const validar = ()=>{
        
        console.log(state);
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('password'));
        (state.userName != '' && state.password != '')?navegate('/home'): null;
    }



    return <div className="login bg-dark ">
        <Link to='/' ><img src={imgPrevent} alt="" className='mb-5' /></Link>
        <h2 className='text-white ms-5 mt-5'>Login</h2>
        <form action="" className='mt-5 d-flex flex-column justify-content-around gap-1 w-75 mx-auto' onSubmit={validar}>
            <label htmlFor="username" className='text-white'>Username</label>
            <input 
            type="text" 
            name='userName'
            placeholder='Enter your Username' 
            className='mb-5'
            value={state.userName}
            onChange={handleChange}
            required
            
            
            />

            <label htmlFor="usepassword" className='text-white'>Password</label>
            <input type="password"
             name='password' 
             placeholder='Enter your Password' 
             className='mb-5 '
             value={state.password}
             onChange={handleChange}
             required
             />

            <button type='submit' className='btn mx-auto w-75'>Login</button >
        </form>
    </div>
}

export default Login;