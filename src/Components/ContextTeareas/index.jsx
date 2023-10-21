// TareasContext.js (crea un archivo para el contexto)
import { createContext, useContext, useState } from "react";

const TareasContext = createContext();

export const TareasProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  return (
    <TareasContext.Provider value={{ tareas, agregarTarea }}>
      {children}
    </TareasContext.Provider>
  );
};

export const useTareas = () => {
  return useContext(TareasContext);
};
