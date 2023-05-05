import React from 'react'
import "./Yo.css";
const Yo = ({yo}) => {
 
  return (
    <div className='yo'>
        <img className='img' src={yo.imagen} alt="klk" />
        <div className='card'>
          <h2>{yo.nombre} {yo.apellido}</h2>
          <p>🗺️ {yo.ciudad}</p>
          <p> {yo.edad}</p>
          <p>📍 {yo.genero}</p>
          <p>🗓️ {yo.cumpleanios}</p>
          <p>🗑️ {yo.telefono}</p>
          <p>🗝️ {yo.correo}</p>
          <p>📱 {yo.telefono}</p>
          <p>📲<a href={yo.github} target='_blank'> Github</a></p>
        </div>
        
    </div>
  )
}

export default Yo