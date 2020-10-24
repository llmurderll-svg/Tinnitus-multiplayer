let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let pagina = "respuestas_dormir.html";
p1.onclick=()=>{
    pasarVariables(pagina,"a");
}
p2.onclick=()=>{
    pasarVariables(pagina,"b");
}
p3.onclick=()=>{
    pasarVariables(pagina,"c");
}

function pasarVariables(pagina, dato) {
    pagina +="?";
    pagina += "dato"+ "=" +dato;
    location.href=pagina;
}