let texto = document.getElementById("texto");
let cadVariables = location.search.substring(1,location.search.length);
let dato = cadVariables.substring(5,6);
console.log(dato);

if(dato=="a"){
    texto.innerHTML="Ayuda Psicológica<br><br>" +
    "Si usted piensa que apenas puede soportar su  tinnitus y se pone más fuerte? Y No cree que pueda manejar eso. <br><br>" +
    "Mejor piense<br><br>" +
    "• Estoy aprendiendo habilidades para ayudarme a sentirme mejor con el tinnitus que tengo ahora. Podría usar las mismas habilidades para sentirme mejor si mi tinnitus se incrementa. <br><br>" +
    "• He notado que Ciertos ejercicios me ayudan a sentirme mas relajado. Me siento mejor cuando estoy mas relajado. Si mi tinnitus se pone mas fuerte puedo usar estos ejercicios para ayudarme a sentirme mejor."; 

}
if(dato=="b"){
    texto.innerHTML="Ayuda Psicológica<br><br>" +
    "Si usted piensa: El tinnitus no sería un problema para mi si mi pareja fuera más solidaria.<br><br>" +
    "Piense mejor:<br><br>" +
    "• Tener tinnitus es difícil para mí. El apoyo de mi pareja y seres queridos es fundamental. Pero depende de mi aprender que me ayuda a sentirme mejor y que no. <br><br>" +
    "• Mi pareja no es realmente la fuente de mi tinnitus, tampoco es la solución. Seguiré practicando las habilidades para afrontar el tinnitus y ver si son útiles."


}
if(dato=="c"){
    texto.innerHTML="Ayuda Psicológica <br><br>" +
    "Si usted piensa: Es imposible quedarme dormido con sonidos en mi cabeza.<br><br>" +
    "Mejor piense:<br><br>" +
    "• Algunas noches mi tinnitus me mantiene despierto, pero la mayoría de las noches me duermo.<br><br>" +
    "• Algunas de las cosas que he intentado me han ayudado a relajarme y me he quedado dormido y algunas otras no. Seguiré experimentando para ver que funciona mejor para mí.";

}
if(dato=="d"){
    texto.innerHTML="Ayuda Psicológica<br><br>" +
    "Si usted piensa: ¿Qué hice para merecer este sonido en mi cabeza?.<br><br>" +
    "Piense usted mejor:<br><br>" +
    "• Tener tinnitus es difícil para mí. Estoy prestando atención a lo que me ayuda a sentirme mejor y a lo que no me ayuda. Estoy aprendiendo poco a poco y el aprendizaje toma tiempo.<br><br>"; 

}
if(dato=="e"){
    texto.innerHTML="Ayuda Psicológica<br><br>" +
    "Si piensa usted: Me pase meses aprendiendo y practicando habilidades para enfrentarme a mi tinnitus. Me sentía mucho mejor con mi Tinnitus, pero luego  tuve un evento muy estresante en mi vida. Ahora me siento tan mal con mi tinnitus como cuando antes de aprender las habilidades de afrontamiento. Todo ese trabajo fue un desperdicio.<br><br>" +
    "Mejor piense usted:<br><br>" +
    "• A veces la vida puede ser muy complicada. Este as uno de esos momentos. Puedo usar las habilidades que he aprendido para ayudarme desde ahora mismo. <br><br>" +
    "• Ahora me siento como cuando empecé a trabajar con mi tinnitus, pero no me sentiré así para siempre. Voy a aplicar la habilidad de afrontamiento que he aprendido para ayudarme a superarlo.";

}


