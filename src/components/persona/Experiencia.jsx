import React from 'react';
import "./Experiencia.css"
const Experiencia = ({ experiencia }) => {
  return (
    <div>
      <div className="experiencia">
        {experiencia.map((item) => {
          return (
            <div className='experiencia_card'>
              <h3 className="name">📕 {item.nombre}</h3>
              <p>{item.fecha}</p>
              <p>{item.donde}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiencia;
