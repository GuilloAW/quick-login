import React from 'react'
import "../components/ModalBox.css";
const atletasApi= async (state) =>{
    const url=("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json")
    let res= await fetch(url),
     json= await res.json();
     state(json)
  }
export{
  atletasApi
}

function ModalBox(props) {
  return(
    <>
    <div className="modalFondo">
      <div className="modalTexto">
        <button className="flo-r" onClick={()=>{props.cerrarModal(false)}}>Cerrar</button>
        <div id="modalTexto">
          {props.textoModal}
        </div>
      </div>
    </div>
    </>
  )
}
export default ModalBox;

