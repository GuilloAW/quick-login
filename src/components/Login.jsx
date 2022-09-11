import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import logoMain from "../assets/logo-main.svg";
export const Login = (props) => {
  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  const emailVal=document.querySelector("#emailVal");
  const passVal=document.querySelector("#passVal");

  /*styled component*/
  const H2Login = styled.h2`
  font-size: 32px;
  line-height: 43px;
  color: #00FFFF;
  font-weight: 700;`;
  const BarTop=styled.div`
  background:#2F4256;
  padding-bottom:42px;
  padding-top:22px;
  margin-top:-22px;
  padding-top:22px;
  border-radius:120%/5% 10% 10%;`;
  const CtaLogin= styled.input`
  background: #FDD402;
  border-radius: 10px;
  font-weight: 400;
  font-size: 1em;
  color: #4A6077;
  text-align-center;
  border:hidden;
  width:95%;
  padding:13px 0px;
  cursor:pointer`;
  const BtnPass= styled.div`
  border:hidden;
  background-color:transparent;
  color:#4A6077;
  fill:#4A6077;
  cursor:pointer;
  display:flex;
  align-items:center;
  text-align:right;`;

  function inicioSesion(e) {
    e.preventDefault();
    if(emailVal.value==="" || passVal.value==="" ){
      alert("campos vacios")
    }else{
      if(email==="admin123" && pass==="adminpass"){
        props.loginEnter(false)
        props.rol("administrador");
      }
      if(email==="cordi123" && pass==="cordipass"){
        props.loginEnter(false)
        props.rol("coordinador");
      }
    }
  }
  const controlSubmit = e => {
    e.preventDefault();
  };
  const verPass =  () => {
    if(passVal.getAttribute("type")==="password"){
      passVal.setAttribute("type","text");
    }else{
      passVal.setAttribute("type","password");
    }
  }
  return (
    <>
      <div id="loginQuick">
        <BarTop>
          <div className="boxContent-50">
          <div className="tex-a-c">
            <img src={logoMain} alt="" className="mar-y-8h"/>
          </div>
          <H2Login className="tex-a-c">Bienvenido</H2Login>
          <p className="tex-a-c col-w wid-90 mar-a lin-h-21p">
          Ingresa como administrador con el <b>admin123</b> y la contraseña <b>adminpass</b>, para ingresar como coordinador el usuario es <b>cordi123</b> y la contraseña <b>cordipass</b>
          <br /><span className="fon-s-0d8">(Este es un texto de ejemplo)</span>
          </p>
          </div>
        </BarTop>
      <div className="boxContent-50">
        <form onSubmit={controlSubmit}>
            <input className="inptLogin wid-90 mar-t-24p" type="text" id="emailVal" placeholder="Correo electrónico" onChange={ (e)=>setEmail(e.target.value) }  required/>
            <div className="dis-f gap-col mar-t-24p">
              <input className="inptLogin wid-80 " type="password" id="passVal" placeholder="Contraseña" autoComplete="off" onChange={ (e)=>setPass(e.target.value) }  required/>
              <BtnPass onClick={verPass}><span className="material-symbols-outlined">visibility</span></BtnPass>
            </div>
            <div className="dis-f mar-t-24p jus-c-sb wid-95">
            <div className="col-bd">
                <input type="checkbox" id="remind"/>
                <label htmlFor="remind">
                Recuerdame
              </label>
            </div>
            <div className="tex-a-r col-bd">
              ¿Olvidaste tú contraseña?
            </div>
            </div>
            <div className="mar-t-24p">
              <CtaLogin type="submit" value="Ingresa" onClick={inicioSesion}></CtaLogin>
            </div>
        </form>
      </div>
      </div>
    </>
  )
}
