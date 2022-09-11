import React from 'react';
import {Administrador} from './Administrador'
import {Header} from './Header'
import {Coordinador} from './Coordinador'
export const Users = (props) => {
  return(
    <>
    <Header nombre={props.nombre} rol={props.rol} loginEnter={props.loginEnter}/>
    {props.rol==="administrador" && <Administrador/>}
    {props.rol==="coordinador" && <Coordinador/>}
    </>
  )
}