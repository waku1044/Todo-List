// Home.js
// import React, { useState, useEffect } from "react";
import HeaderHome from "../../Components/HeaderHome";
import "./style.css";
import imgPrin from "../../assets/Img/imghomeprin.svg";
import FooterNavBar from "../../Components/FooterNavbar";
import CardTarea from "../../Components/tarea";
import { useTareas } from "../../Components/ContextTeareas";
// import { useLocation } from "react-router-dom";

const Home = () => {
  const { tareas } = useTareas();
  return (
    <>
      <div className="home bg-dark text-center">
        <HeaderHome />
        <h6 className="text-white">Lista de Tareas</h6>

        {/* // Luego, puedes mapear las tareas y mostrarlas en tu componente */}
        {tareas.length > 0 ? (
          tareas.map((dato, index) => <CardTarea key={index} datos={dato} />)
        ) : (
          // Muestra la imagen y los párrafos si no hay tareas
          <div>
            <img src={imgPrin} className="img-fluid" alt="foto" />
          </div>
        )}

        <FooterNavBar />
      </div>
    </>
  );
};

export default Home;
