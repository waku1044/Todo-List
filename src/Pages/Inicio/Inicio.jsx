import Botton from '../../Components/Button';
import Header from '../../Components/Header';
import './style.css'


const Inicio = ()=>{
        return <>  
        <Header />
        <main className='bg-dark'>
            <Botton titulo='Login' bg='#8875FF'/>
            <Botton titulo='Create account'/>
        </main>
        </>
}

export default Inicio;