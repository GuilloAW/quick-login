export default function inicioSesion(props) {

  if(props.email==="" || props.pass==="" ){
    alert("campos vacios")
  }else{
    if(props.email==="admin123" && props.pass==="admin123"){
      props.loginEnter(false)
      props.rol("administrador");
    }
    if(props.email==="cordi123" && props.pass==="cordi123"){
      props.loginEnter(false)
      props.rol("coordinadora");
    }
  }
}