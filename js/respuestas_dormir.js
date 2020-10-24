let texto = document.getElementById("texto");
let cadVariables = location.search.substring(1,location.search.length);
let dato = cadVariables.substring(5,6);
console.log(dato);

if(dato=="a"){
    texto.innerHTML="• Evite el alcohol justo antes de acostarse. El alcohol puede causar que se despierte durante la noche, aunque podría haberle ayudado a quedarse dormido.<br><br>" +
    "• Evite comidas pesadas cerca de la hora de acostarse.<br><br>" +
    "• Evite la nicotina antes de acostarse o cuando se despierte por la noche.<br><br>" +
    "• Deje de tomar bebidas con cafeína por lo menos 4-6 horas antes de acostarse.";


}
if(dato=="b"){
    texto.innerHTML="• No haga ejercicio antes de acostarse.<br><br>" +
    "• Evite las actividades mentalmente estimulantes.<br><br>" +
    "• Solo hacer actividades que sean tranquilas y relajantes.<br><br>" +
    "• Tome una ducha caliente.<br><br>" +
    "• Técnicas de relajación como respiración profunda o visualización. <br><br>" +
    "• Escuche el sonido que le relaje<br><br>" 

}
if(dato=="c"){
    texto.innerHTML="• Mantenga la temperatura constante durante toda la noche.<br><br>" +
    "• Mantenga la habitación oscura.<br><br>" +
    "• Retire, cubra luces brillantes y otros dispositivos electrónicos.<br><br>" +
    "• Reproduzca sonidos de nivel bajo constante durante toda la noche que sean de su agrado.<br><br> "

}