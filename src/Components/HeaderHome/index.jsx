import ImgUser from '../../assets/Img/imgUserMale.png';


const HeaderHome = ()=>{
    
    
    return <header className='d-flex w-100  justify-content-between align-items-center px-5 bg-secondary '>
        <h5 className='fw-bold'>Inicio</h5>
        <h2 className='fst-italic text-capitalize'>{localStorage.getItem('user')}</h2>
        <img src={ImgUser} alt="User" />
    </header>
}
export default HeaderHome;