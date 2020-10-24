let working = false;
let usuario, password, documento;
usuario_activo();
$(function(){
  $('#login').on('submit', function(e) {
    e.preventDefault();
    const data = new FormData(document.querySelector('form'));
    usuario = data.get('usuario');
    password = data.get('password');
    documento = data.get('documento')
    falta_datos = evaluar(usuario,password);
    if(!falta_datos){
      let res = comprobar_registro(usuario,password,documento);
    }
    else{
      alert('Debe completar todos los datos');
    }

  /*
  console.log("se intenta loguear");
  if (working) return;
  working = true;
  let $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Welcome back!');
    setTimeout(function() {
      $state.html('Log in');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
  */
  })
})
let evaluar = (usuario,password,documento)=>{
  if(usuario=="" || password==""|| documento==""){
    return true   
  }
  else{
    return false
  }
}
let comprobar_registro =  (usuario,password,documento)=>{
  let respuesta;
  $.ajax({
    type:"POST",

    crossDomain: true,
    url:"https://tinnitusperu.000webhostapp.com/app_tinnitus_relief/login.php",
    data:{
      nombre: usuario,
      password: password,
      dni: documento
    },
    success:function(res){
      validar_usuario(res); 
      //return res;
    },
    dataType: "json"
  })
  return respuesta;
};


let validar_usuario = (res) =>{
  
  if(res!=null){
    if(res['Login']!="ER"){
      alert('Se logueo correctamente');
      localStorage.setItem("usuario","activo");
      window.location.href="psicologia.html";
    }
    else{
      alert('Credenciales Invalidas');
    }
  }
  else{
    alert("Fallo en el Login")
  }
};

function usuario_activo(){
  let usuario_guardado = localStorage.getItem("usuario");
  if(usuario_guardado!=null){
    window.location.href="psicologia.html";
  }
}