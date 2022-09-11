import React from 'react'
import { useState } from 'react';
import {Login} from './Login'
import {Users} from './Users'
import {Footer} from './Footer'

export const Inicio = (props) => {
const [loginEnter,stateLoginEnter] = useState(true);
const [rol,stateRol] = useState(true);
const [nombre,stateNombre] = useState(true);
  return (
  <>
    {loginEnter===true && <Login loginEnter={stateLoginEnter} rol={stateRol} nombre={stateNombre}/>}
    {loginEnter===false && <Users rol={rol} nombre={nombre} loginEnter={stateLoginEnter}/>}
    <Footer/>
  </>
  )
}
