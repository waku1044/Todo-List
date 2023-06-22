import imgAgregar from '../../assets/Img/imgAgregar.svg';
import imgIndex from '../../assets/Img/imgIndex.svg';
import imguserbar from '../../assets/Img/imguserbar.svg';
import './style.css';

const FooterNavBar = ()=>{

    return <div className="tasks d-flex justify-content-around px-3">
    <img src={imgIndex} alt="index" className='imgbar'  />
    <img  className='imgAgregar' src={imgAgregar} alt="AgregarTarea" />
    <img src={imguserbar} alt="user" className='imgbar' />
</div>

}
export default FooterNavBar;


