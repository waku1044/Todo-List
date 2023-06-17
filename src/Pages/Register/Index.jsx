import './style.css';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
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

            <Button bg='#8687E7' titulo='Login' margin='0 auto' />
        </form>
    </div>
}

export default Login;