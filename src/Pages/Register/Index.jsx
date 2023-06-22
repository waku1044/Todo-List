import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import imgPrevent from '../../assets/Img/bottonPrevent.svg';
import { useNavigate } from 'react-router-dom';

const regisUser = {
    userName:'',
    userPassword:'',
    userPassRepeat:''
}
const Register = ()=>{



    const [dataUser, setDataUser] = useState(regisUser);
    const [error, setError] = useState({});
    const navegate = useNavigate();
    
    const handleChange = (e)=>{
        setDataUser({...dataUser,[e.target.name]:e.target.value})
    }
    const validate = ()=>{
        let errorList = {};

        if(!dataUser.userName)
        errorList = {...errorList, user:'Campo obligatorio.'};
        else if(dataUser.userName.length < 4)
        errorList = {...errorList, user:'Debe tener al menos 4 digitos.'};
        if(!dataUser.userPassword)
        errorList = {...errorList, password:'Campo obligatorio.'}
        else if(dataUser.userPassword.length < 6)
        errorList = {...errorList, password:'Debe tener al menos 6 digitos.'};
        if(!dataUser.userPassRepeat)
        errorList = {...errorList, passRepeat:'Campo obligatorio.'}
        else if(dataUser.userPassword != dataUser.userPassRepeat)
        errorList = {...errorList, passRepeat:'No coincide con la password introducida.'}

        return errorList;
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let errores = validate();
        if(Object.keys(errores).length < 1){
            console.log(dataUser)
            localStorage.setItem('user', dataUser.userName);
            localStorage.setItem('password', dataUser.userPassword);
            navegate('/login')
            console.log('Puede ingresar')
        }
        setError(errores)
        
    }

    return <div className="register bg-dark pt-5">
        <Link to='/' ><img src={imgPrevent} alt="" className='ms-4 mb-4' /></Link>
        <h2 className='text-white ms-5 mt-2'>Registro</h2>
        <form action="" className='mt-5 d-flex flex-column justify-content-around gap-1 w-75 mx-auto' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usename" className='text-white'>Usuario</label>
                <input type="text" 
                name='userName' 
                placeholder='Minimo 4 digitos' 
                className=''
                value={dataUser.userName}
                onChange={handleChange}
                />
                {error.user && <p className='errorText'>{error.user}</p>}
            </div>
            <div>
                <label htmlFor="usepassword" className='text-white'>Password</label>
                <input type="password" 
                name='userPassword' 
                placeholder='Minimo 6 digitos' 
                className=''
                value={dataUser.userPassword}
                onChange={handleChange}
                />
                {error.password && <p className='errorText'>{error.password}</p>}

            </div>
            <div>
                <label htmlFor="usepassword" className='text-white'>Repetir Password</label>
                <input type="password" 
                name='userPassRepeat' 
                placeholder='Repetir Password' 
                className=''
                value={dataUser.userPassRepeat}
                onChange={handleChange}
                />
                {error.passRepeat && <p className='errorText'>{error.passRepeat}</p>}

            </div>

            <button type='submit' className='btn btn-primary mx-auto'>Login</button>
        </form>
    </div>
}

export default Register;