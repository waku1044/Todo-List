import './style.css';
import BottonPrevent from '../../Components/ButtonPrevent';
import Button from '../../Components/Button' 

const Login = ()=>{
    return <div className="login bg-dark">
        <BottonPrevent />
        <h2 className='text-white ms-5'>Login</h2>
        <form action="" className='mt-5 d-flex flex-column justify-content-around gap-1'>
            <label htmlFor="usename" className='text-white'>Username</label>
            <input type="text" name='useranme' placeholder='Enter your Username' className='mb-5'/>

            <label htmlFor="usepassword" className='text-white'>Password</label>
            <input type="password" name='userpassword' placeholder='Enter your Password'/>

            <Button bg='#8687E7' titulo='Login' margin='2rem auto' />
        </form>
    </div>
}

export default Login;