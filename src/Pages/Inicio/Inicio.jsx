
import Header from '../../Components/Header';
// import { Link } from 'react-router-dom';
import { BtnLink } from '../../Components/BtnLink';
import './style.css'


const Inicio = ()=>{
        return <>  
        <Header />
        <main className='bg-dark d-flex flex-column'>
        <BtnLink to='/login' className='btn' width='75%'>Login</BtnLink>
        <BtnLink to='/register' className='btn my-3' width='75%' border='forestgreen' bg='transparent'>Create account</BtnLink> 
        </main>
        </>
}

export default Inicio;