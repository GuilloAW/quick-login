import React from 'react'
import { useState} from 'react'
import "styled-components";
import ModalBox from "../functions/funciones"

export const Categorias = (props) => {
  const [modal,setModal]= useState(false);
  const [texto,setTexto]= useState();
  const categoria= props.categorias;
    let totalGold=0,totalSilver=0,totalBronze=0;
    categoria.forEach(element => {
      totalGold+=element["gold"];
      totalSilver+=element["silver"];
      totalBronze+=element["bronze"];
    });
    function textoModal(medalla){
      const textoMedalla={
        "medallaOro":<React.Fragment><h3>¿Por qué las medallas de oro no son de oro?</h3><p>De acuerdo con el Comité Olímpico Internacional, las medallas de oro olímpicas solo contienen 1.34 por ciento de oro, una porción mínima.</p></React.Fragment>,
        "medallaPlata":<React.Fragment><h3>¿Qué quiere decir medalla de plata?</h3><p>Una medalla de plata es una medalla que se otorga al competidor o competidora que queda en segunda posición de una competición. En los primeros Juegos Olímpicos modernos el campeón recibía la medalla de plata y el subcampeón, la de bronce.</p></React.Fragment>,
        "medallaBronce":<React.Fragment><h3>¿Por qué hay dos medallas de bronce?</h3><p>Porque en competiciones olímpicas, algunas disciplinas, entre las que se encuentra el boxeo, reparten además del oro y la plata dos medallas de bronce. ... Los boxeadores que pierdan en la semifinal se llevan directamente el bronce.30 jul 2021</p></React.Fragment>
      };
    let textoNuevo=<React.Fragment>
      <h2>Medallas Olímpicas</h2>
      <p>Sabías que para compensar el esfuerzo que realizan los atletas de los Juegos Olímpicos, se les premia con medallas olímpicas. Esto enriquece la liturgia del espíritu olímpico en el intento de mantener una competición con carácter amateur.</p>
      <p>{textoMedalla[medalla]}</p>
      </React.Fragment> ;
      setTexto(textoNuevo);
      setModal(true);
    }
  return (
    <>
    <div>
    {modal && <ModalBox cerrarModal={setModal} textoModal={texto}/>}
      <div>
        <div>Oro</div><div>Total :{totalGold}</div><div><button onClick={() => {textoModal("medallaOro")}}>Ver</button></div>
        </div>
      <div>
        <div>Plata</div><div>Total :{totalSilver}</div><div><button onClick={() => {textoModal("medallaPlata")}}>Ver</button></div>
        </div>
      <div>
        <div>Bronze</div><div>Total :{totalBronze}</div><div><button onClick={() => {textoModal("medallaBronce")}}>Ver</button></div>
        </div>
    </div>
    </>
  )
}
