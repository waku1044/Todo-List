import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import imgPrevent from "../../assets/Img/bottonPrevent.svg";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const regisUser = {
  userName: "",
  userPassword: "",
  userEmail: "",
  userId:''
  
};


const Register = () => {
    const [dataUser, setDataUser] = useState(regisUser);
    const [error, setError] = useState({});
  const navegate = useNavigate();

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let errorList = {};
    const expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!dataUser.userEmail)
      errorList = { ...errorList, email: "Campo obligatorio." };
    else if (!expresion.test(dataUser.userEmail))
      errorList = { ...errorList, email: "Debe ser un email." };
    if (!dataUser.userName)
      errorList = { ...errorList, user: "Campo obligatorio." };
    else if (dataUser.userName.length < 4)
      errorList = { ...errorList, user: "Debe tener al menos 4 digitos." };
    if (!dataUser.userPassword)
      errorList = { ...errorList, password: "Campo obligatorio." };
    else if (dataUser.userPassword.length < 6)
      errorList = { ...errorList, password: "Debe tener al menos 6 digitos." };
    if (!dataUser.userPassRepeat)
      errorList = { ...errorList, passRepeat: "Campo obligatorio." };
    else if (dataUser.userPassword != dataUser.userPassRepeat)
      errorList = {
          ...errorList,
          passRepeat: "No coincide con la password introducida.",
        };

    return errorList;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errores = validate();
    if (Object.keys(errores).length < 1) {
      dataUser.userId = uuidv4();
     
      console.log(dataUser.userName)
        localStorage.setItem('user',dataUser.userName);
        localStorage.setItem('email',dataUser.userEmail);
        localStorage.setItem('password',dataUser.userPassword);
        localStorage.setItem('userId',dataUser.userId);
      // console.log(localStorage.getItem('user'),localStorage.getItem('password'))
      navegate("/login");
      // console.log("Puede ingresar");
    }
    setError(errores);
  };

  return (
    <div className="register bg-dark pt-5">
      <Link to="/">
        <img src={imgPrevent} alt="" className="ms-4 mb-4" />
      </Link>
      <h2 className="text-white ms-5 mt-2">Registro</h2>
      <form
        action=""
        className=" form mt-5 d-flex flex-column justify-content-around gap-1 w-75 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="username" className="text-white">
            Usuario
          </label>
          <input
            type="text"
            name="userName"
            placeholder="Minimo 4 digitos"
            className=""
            value={dataUser.userName}
            onChange={handleChange}
            autoFocus
          />
          {error.user && <p className="errorText">{error.user}</p>}
        </div>
        <div>
          <label htmlFor="useremail" className="text-white">
            Email
          </label>
          <input
            type="text"
            name="userEmail"
            placeholder="example@example.com"
            className=""
            value={dataUser.userEmail}
            onChange={handleChange}
            autoFocus
          />
          {error.email && <p className="errorText">{error.email}</p>}
        </div>
        <div>
          <label htmlFor="userpassword" className="text-white">
            Password
          </label>
          <input
            type="password"
            name="userPassword"
            placeholder="Minimo 6 digitos"
            className=""
            value={dataUser.userPassword}
            onChange={handleChange}
          />
          {error.password && <p className="errorText">{error.password}</p>}
        </div>
        <div>
          <label htmlFor="usepassrepeat" className="text-white">
            Repetir Password
          </label>
          <input
            type="password"
            name="userPassRepeat"
            placeholder="Repetir Password"
            className=""
            value={dataUser.userPassRepeat}
            onChange={handleChange}
          />
          {error.passRepeat && <p className="errorText">{error.passRepeat}</p>}
        </div>

        <button type="submit" className="btn btn-primary mx-auto">
          Registrate
        </button>
      </form>
    </div>
  );
};

export default Register;
