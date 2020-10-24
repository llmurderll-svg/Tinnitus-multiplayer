let url = "https://tinnitusperu.com/";
let enviar = document.getElementById("btn_web");
enviar.onclick = function(){
    enviar_mensaje(url);
}
enviar_mensaje=(url)=>{
    window.open(url);
}