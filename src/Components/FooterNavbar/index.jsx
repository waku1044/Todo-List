import imgAgregar from "../../assets/Img/imgAgregar.svg";
import imgIndex from "../../assets/Img/imgIndex.svg";
import imgUserBar from "../../assets/Img/imguserbar.svg";
import { Link } from "react-router-dom";
import "./style.css";

const FooterNavBar = () => {
  return (
    <div className="tasks d-flex justify-content-around align-items-center px-3">
      <Link to="/home">
        <img src={imgIndex} className="imgbar" alt="index" />
      </Link>
      <Link to="/takes">
        <img src={imgAgregar} alt="AgregarTarea" className="imgAgregar" />
      </Link>
      <Link to="/">
        <img src={imgUserBar} className="imgbar" alt="user" />
      </Link>
    </div>
  );
};
export default FooterNavBar;
