
import Header from '../../Components/Header';
// import { Link } from 'react-router-dom';
import { BtnLink } from '../../Components/BtnLink';
import './style.css'


const Inicio = ()=>{
        return <>  
        <Header />
        <main className='bg-dark d-flex flex-column pb-5'>
        <BtnLink to='/login' className='btn' width='75%'>Entrar</BtnLink>
        <BtnLink to='/register' className='btn my-3 ' width='75%' border='forestgreen' bg='transparent'>Crear Cuenta</BtnLink> 
        </main>
        </>
}

export default Inicio;