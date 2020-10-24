function usuario_activo(){
    let usuario_guardado = localStorage.getItem("usuario");
    if(usuario_guardado==null){
      window.location.href="login.html";
    }
}
usuario_activo();