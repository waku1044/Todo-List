import {Link} from "react-router-dom";



const tarea = ({datos})=>{

 
    return <div className=" bg-secondary w-75 mx-auto py-3 rounded my-3">
    <div className="mb-0 pb-0">
      <p>Pendiente</p>
      <p>ID: <b>{datos.id}</b></p>
    </div>
    <div className="card-body pt-0">
      <h5 className="card-title fw-bolder text-warning"><b>{datos.titulo}</b></h5>
      <p className="card-text fw-semibold text-dark"><b>{datos.description}</b></p>
      <p className="card-text">Día: <b>{datos.day}</b></p>
      <p className="card-text">Hora: <b>{datos.time}</b></p>
      <div className="card-footer d-flex justify-content-around">
      <Link to="/Edit" className="btn btn-primary">Editar</Link>
      <button className="btn-danger btn ">Eliminar</button>

      </div>
    </div>
  </div>
};

export default tarea;