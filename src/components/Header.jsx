import React from 'react'
export const Header = (props) => {
  function cerrar() {
  props.loginEnter(true)
  }
  return(
    <>
    <header>
      <img src="" alt="Logo smart quick" />
      {props.nombre}{props.rol}
      <button onClick={cerrar}></button>
    </header>
    </>
  )
}