import React from 'react'
import logoMain from "../assets/logo-main.svg";
import styled from 'styled-components';
export const Header = (props) => {
  const BarTop= styled.div`
  display:flex;
  justify-content: space-between;
`;
const NubeMenu = styled.div`
position:absolute;
background: #F2F2F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
padding:11px;
z-index:1;
background-color:#F2F2F2;
display:none;
`;
  function cerrar() {
  props.loginEnter(true)
  }
  const openNube= () =>{
    const nube=document.querySelector("#menuNube");
    if(nube.style.display==="block"){
      nube.style.display="none";
    }else{
      nube.style.display="block";
    }
  }
  return(
    <>
    <header className="bac-c-bd pad-y-21p">
      <div className="boxContent">
        <BarTop>
            <div><img src={logoMain} alt="" className="wid-41p"/></div>
            <div>
              <div>{props.nombre}</div>
              <div className="dis-f">
                <div><span className="fon-s-2e col-w material-symbols-outlined">account_circle</span></div>
                <div onClick={openNube}><span className="col-w material-symbols-outlined">arrow_drop_down</span></div>
              </div>
              <NubeMenu id="menuNube">
                <div>{props.rol}</div>
                <div><div onClick={cerrar}>Cerrar Sesion</div></div>
              </NubeMenu>
            </div>
        </BarTop>
      </div>
    </header>
    </>
  )
}