let url = "https://api.whatsapp.com/send?text=text&phone=51918363157";
let enviar = document.getElementById("btn_enviar");
enviar.onclick = function(){
    enviar_mensaje(url);
}
enviar_mensaje=(url)=>{
    window.open(url);
}