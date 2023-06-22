import HeaderHome from "../../Components/HeaderHome"; 
import './style.css';
import imgPrin from '../../assets/Img/imghomeprin.svg';
import FooterNavBar from "../../Components/FooterNavbar";



const Home = ()=>{

        return <>
                <HeaderHome />
                <div className="home bg-dark d-flex flex-column align-items-center ">
                        <picture className="mt-5">
                                <img src={imgPrin} className="mt-5" alt="imgPrincipal" />
                        </picture>
                        <p className="text-white">What do you want to do today?</p>
                        <p className="text-white">Tap + to add your tasks</p>
                </div>
                        <FooterNavBar />
                </>
        
    
}
export default Home;