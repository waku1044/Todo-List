import Botton from '../../Components/Button';
import Header from '../../Components/Header';
import './style.css'


const Inicio = ()=>{
        return <>  
        <Header />
        <main>
            <Botton titulo='Ingresar' bg='#8875FF'/>
            <p>No tenes cuenta?</p>
            <Botton titulo='Registrate'/>
        </main>
        </>
}

export default Inicio;