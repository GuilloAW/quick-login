import React from 'react'
import { useState,useEffect } from 'react'
import {Deportistas} from './Deportistas'
import {Categorias} from'./Categorias'
import {atletasApi} from'../functions/funciones'
import styled from 'styled-components';
export const Administrador = () => {
  const [list,setList] = useState("1");
  const [esta,setEsta] = useState("");
  const [deportista,setDeportista]= useState("");
  useEffect(() => {
    atletasApi(setDeportista)
  }, [])

  function listInfo() {
    setList("1");
    setEsta("0");
  }
  function estaInfo() {
    setList("0")
    setEsta("1")
  }
const BtnTab=styled.div`
color:var(--yellow);
background-color:transparent;
border:transparent;
font-size:1.1em;
cursor:pointer;
padding:0px 1em;
&.btnActivo{
  border-bottom: 2px solid var(--yellow);
}
`;

  return (
    <>
    <div id="contentAdmin" className="bac-c-bd">
      <div id="tabs" className="boxContent">
        <div id="btnTabs" className="dis-f jus-c-se">
          <BtnTab className={list==="1" && "btnActivo"} onClick={listInfo}>Deportistas</BtnTab>
          <BtnTab  className={esta==="1" && "btnActivo"} onClick={estaInfo}>Categorias</BtnTab>
        </div>
        <div id="infoTabs" className="boxContent">
          {list==="1" && <Deportistas atletas={deportista}/>}
          {esta==="1" && <Categorias categorias={deportista}/>}
        </div>
      </div>
    </div>
    </>
  )
}
