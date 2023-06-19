import './style.css';
import { BtnLink } from '../../Components/BtnLink';
import { Link } from 'react-router-dom';
// import closeEye from '../../assets/Img/closeEye.svg';
import imgPrevent from '../../assets/Img/bottonPrevent.svg'


const Login = ()=>{


    return <div className="register bg-dark ">
        <Link to='/' ><img src={imgPrevent} alt="" className='' /></Link>
        <h2 className='text-white ms-5 mt-2'>Register</h2>
        <form action="" className='mt-5 d-flex flex-column justify-content-around gap-1 w-75 mx-auto'>
            <label htmlFor="usename" className='text-white'>Username</label>
            <input type="text" name='useranme' placeholder='Enter your Username' className='mb-5'/>

            <label htmlFor="usepassword" className='text-white'>Password</label>
            <input type="password" name='userpassword' placeholder='Enter your Password' className='mb-5 '/>

            <label htmlFor="usepassword" className='text-white'>Repeat Password</label>
            <input type="password" name='userpassword' placeholder='Repeat Password' className='mb-5 '/>

            <BtnLink bg='#8687E7' width='75%' className='btn mx-auto'>Login</BtnLink>
        </form>
    </div>
}

export default Login;