import React from 'react'
import "./Educacion.css"
const Educacion = ({educacion}) => {
  return (
    <div>
      <div className="educacion">
        {educacion.map((item) => {
          return (
            <div className='educacion_card'>
              <h3 className="name">📕 {item.grado}</h3>
              <p>{item.fecha}</p>
              <p>{item.descripcion}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Educacion