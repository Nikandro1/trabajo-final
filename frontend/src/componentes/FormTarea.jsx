import React from 'react'

export default function FormTarea () {
  return (
    <div className=''>
      <h3>Agregar nueva tarea</h3>
      <form action="POST">
        <div className="inputTarea">
          <input type="text" placeholder='Titulo'/>
        </div>
        <div className="inputDescripcion">
          <input type="text" placeholder='Descripción'/>
        </div>
        <div className="inputFecha">
          <input type="date" placeholder='Fecha limite'/>
        </div>
        <button>Añadir</button>
      </form>
    </div>
  )
}
