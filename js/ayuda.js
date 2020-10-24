let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let pagina = "respuestas_ayuda.html";
p1.onclick=()=>{
    pasarVariables(pagina,"a");
}
p2.onclick=()=>{
    pasarVariables(pagina,"b");
}
p3.onclick=()=>{
    pasarVariables(pagina,"c");
}
p4.onclick=()=>{
    pasarVariables(pagina,"d");
}
p5.onclick=()=>{
    pasarVariables(pagina,"e");
}

function pasarVariables(pagina, dato) {
    pagina +="?";
    pagina += "dato"+ "=" +dato;
    location.href=pagina;
}