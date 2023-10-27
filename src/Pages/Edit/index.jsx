import HeaderHome from "../../Components/HeaderHome";
// import "./takes.css";
import FooterNavBar from "../../Components/FooterNavbar";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useTareas } from "../../Components/ContextTeareas";



const Edit = () => {
  const navigator = useNavigate();
  const { editarTarea, tareas } = useTareas();
  const location = useLocation();
  const taskId = new URLSearchParams(location.search).get("id");
  
  
  const [state, setState] = useState({ ...tareas.find((task) => (task.id == taskId) ? task:null) }); 
  
  
  
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
  const handleDate = (e) => {
    e.preventDefault();
    editarTarea(taskId, state);
    console.log(state)
    navigator("/home");
  };
  console.log(state);
  return (
    <>
      <HeaderHome title= 'Editar'/>
      <div className="takes pt-3 align-items-center">
        <form action="" onSubmit={handleDate} className="form w-75 mx-auto">
          <div className="col-12 ">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              className="fs-1 px-2 mb-4 bg-secondary"
              name="titulo"
              value={state.titulo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 ">
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              className="fs-1 px-2 mb-4 bg-secondary"
              name="description"
              value={state.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 ">
            <label htmlFor="day">Día</label>
            <input
              type="date"
              className="fs-1 px-2  mb-4 bg-secondary"
              name="day"
              value={state.day}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="time">Hora</label>
            <input
              type="time"
              className="fs-1 px-2 mb-4 bg-secondary"
              name="time"
              value={state.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-primary col-12">
              Guardar
            </button>
          </div>
        </form>
      </div>
      
      <FooterNavBar />
    </>
  );
};
export default Edit;
