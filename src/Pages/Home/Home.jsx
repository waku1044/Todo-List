import HeaderHome from "../../Components/HeaderHome"; 
import './style.css';
import imgPrin from '../../assets/Img/imghomeprin.svg';
import imgAgregar from '../../assets/Img/imgAgregar.png';
import imgIndex from '../../assets/Img/imgIndex.svg';
import imguserbar from '../../assets/Img/imguserbar.svg';

const Home = ()=>{

        return <>
                <HeaderHome />
                <div className="home bg-dark d-flex flex-column align-items-center ">
                        <picture className="mt-5">
                                <img src={imgPrin} className="mt-5" alt="imgPrincipal" />
                        </picture>
                        <p className="text-white">What do you want to do today?</p>
                        <p className="text-white">Tap + to add your tasks</p>
                        <div className="tasks d-flex justify-content-around px-3">
                                <img src={imgIndex} alt="index" className='imgbar'  />
                                <img  className='imgAgregar' src={imgAgregar} alt="AgregarTarea" />
                                <img src={imguserbar} alt="user" className='imgbar' />
                        </div>
                </div>
                </>
        
    
}
export default Home;