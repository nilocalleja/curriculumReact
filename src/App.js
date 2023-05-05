import { useState } from "react";
import "./App.css";
import { CV } from "./cv/cv";
import Yo from "./components/persona/Yo";
import Experiencia from "./components/persona/Experiencia";
import Educacion from "./components/persona/Educacion";
import Habilidades from "./components/persona/Habilidades";

const { yo, experiencia, educacion, habilidades } = CV;

function App() {  
  const [mostrarEducacion, setMostrarEducacion] = useState(true);
  return (
    <div className="App">
      <Yo yo={yo}></Yo>
      <span>
        ________________________________________________________________________________
        About me
        ________________________________________________________________________________
      </span>
      <div className="custom-btn btn-4">
      <button className="btn" onClick={() => setMostrarEducacion(true)}>
        Educacion
      </button>
      <button className="btn" onClick={() => setMostrarEducacion(false)}>
        Experiencia
      </button>
      </div>
      <div>
        {mostrarEducacion ? (
          <Educacion educacion={educacion}></Educacion>
        ) : (
          <Experiencia experiencia={experiencia}></Experiencia>
        )}
      </div>
      <span>
        ________________________________________________________________________________
        Habilidades
        ________________________________________________________________________________
      </span>
      <Habilidades habilidades={habilidades}></Habilidades>    
    </div>
  );
}

export default App;
