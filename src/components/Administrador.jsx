import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {Desportistas} from './Deportistas'
import {Categorias} from'./Categorias'
import {atletasApi} from'../functions/funciones'

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

  return (
    <>
    <div id="tabs" >
      <div id="btnTabs">
        <NavLink to="" onClick={listInfo}>Deportistas</NavLink>
        <NavLink to="" onClick={estaInfo}>Categorias</NavLink>
      </div>
      <div id="infoTabs">
        {list==="1" && <Desportistas atletas={deportista}/>}
        {esta==="1" && <Categorias categorias={deportista}/>}
      </div>
    </div>
    </>
  )
}
