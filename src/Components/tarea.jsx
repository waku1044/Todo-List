import {Link} from "react-router-dom";
import { useTareas } from "./ContextTeareas";


const tarea = ({datos})=>{

  const {  eliminarTarea } = useTareas();

 
    return <div className=" bg-secondary mx-auto p-3 rounded my-3 " style={{width:'150px;' }}>
    <div className="mb-0 pb-0">
      <p>Pendiente</p>
      <p>ID: <b>{datos.id}</b></p>
    </div>
    <div className="card-body pt-0">
      <h5 className="card-title fw-bolder text-warning"><b>{datos.titulo}</b></h5>
      <p className="card-text fw-semibold text-dark h3"><b>{datos.description}</b></p>
      <p className="card-text">Día: <b>{datos.day}</b></p>
      <p className="card-text">Hora: <b>{datos.time}</b></p>
      <div className="">
      <Link to={`/edit?id=${datos.id}`} className="btn btn-primary me-3 rounded">Editar</Link>
      <button className="btn-danger btn rounded" onClick={() => eliminarTarea(datos.id)} >Eliminar</button>

      </div>
    </div>
  </div>
};

export default tarea;