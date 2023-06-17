
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import './style.css'


const Inicio = ()=>{
        return <>  
        <Header />
        <main className='bg-dark'>
        <Link to='/login' className='btn btn-success w-50 mb-3'>Login</Link>
        <Link to='/register' className='btn btn-outline-primary w-50 mb-3'>Create account</Link> 
        </main>
        </>
}

export default Inicio;