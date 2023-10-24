// TareasContext.js (crea un archivo para el contexto)
import { createContext, useContext, useState } from "react";

const TareasContext = createContext();

export const TareasProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const editarTarea = (id, nuevosDatos) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, ...nuevosDatos };
        }
        return tarea;
      })
    );
  };

  return (
    <TareasContext.Provider value={{ tareas, agregarTarea, eliminarTarea, editarTarea }}>
      {children}
    </TareasContext.Provider>
  );
};

export const useTareas = () => {
  return useContext(TareasContext);
};
