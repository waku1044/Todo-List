const cardTarea = (props) => {
  

    return(

    <div className="card text-center">
        <div className="card-header">
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text text-black">{props.description}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
        <div className="card-footer text-body-secondary">
        <p className="text-black">{props.day}</p>
        <p className="text-black">{props.time}</p>
        </div>
      </div>
    )

      
  };

  export default cardTarea;