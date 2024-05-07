import ImgUser from '../../assets/Img/imgUserMale.png';


const HeaderHome = ({title='Inicio'})=>{
    
    
    return <header className='d-flex w-100  justify-content-between align-items-center px-5 bg-secondary border-bottom border-black'>
        <h5 className='fw-bold'>{title}</h5>
        <h2 className='fst-italic text-capitalize'>{localStorage.getItem('user')}</h2>
        <img src={ImgUser} alt="User" />
    </header>
}
export default HeaderHome;