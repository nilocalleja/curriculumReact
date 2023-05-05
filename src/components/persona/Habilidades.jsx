import React from "react";
import "./Habilidades.css";
const Habilidades = ({ habilidades }) => {
  return (
    <div className="habilidades">
      <div className="habilidades_card">
        {habilidades.map((habilidad) => (
          <p key={habilidad}>{habilidad}</p>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
