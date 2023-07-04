import imgAgregar from '../../assets/Img/imgAgregar.svg';
import imgIndex from '../../assets/Img/imgIndex.svg';
import imgUserBar from '../../assets/Img/imguserbar.svg';
import { useNavigate } from 'react-router-dom';
import './style.css';

const FooterNavBar = ()=>{

    const navegate = useNavigate()
    const  pageTaks = ()=>{
       navegate('../takes');
    }
   
    return <div className="tasks d-flex justify-content-around px-3">
    <img src={imgIndex} alt="index" className='imgbar'  />
    <img src={imgAgregar} 
    alt="AgregarTarea" 
    className='imgAgregar'
    onClick={pageTaks}
    />
    <img src={imgUserBar} alt="user" className='imgbar' />
</div>

}
export default FooterNavBar;


