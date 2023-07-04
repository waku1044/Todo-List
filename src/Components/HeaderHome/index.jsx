import ImgUser from '../../assets/Img/imgUserMale.png';


const HeaderHome = ()=>{
    
    
    return <header className='d-flex justify-content-between align-items-center px-5 py-3 bg-secondary '>
        <h5 className='fw-bold'>Index</h5>
        <h2 className='fst-italic text-capitalize'>{localStorage.getItem('user')}</h2>
        <img src={ImgUser} alt="User" />
    </header>
}
export default HeaderHome;