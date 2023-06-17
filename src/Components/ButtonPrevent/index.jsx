import ImgPrevent from '../../assets/Img/bottonPrevent.svg';

const BottonPrevent = (destino)=>{
        return <img src={ImgPrevent} alt="Prevent" onClick={destino} className='m-5' />
}

export default BottonPrevent;