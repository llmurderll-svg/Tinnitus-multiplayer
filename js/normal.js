let progressCircle = document.querySelector(".progress");
let accion = document.getElementById("accion");
let radius = progressCircle.r.baseVal.value;
    //circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

    //0 to 100


function setProgress(percent) {
    progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}

let respiracion = setInterval(carga, 35);
let con = 0;
let estado = false;
function carga(){
    
    if(con<=100){
        if(!estado){
            accion.innerHTML="Inhala";  
        }
        else{
            accion.innerHTML="Exhala";
        }
        setProgress(con);
        con = con + 2;
        
    }
    else{
        if(!estado){
            estado=true;
        }
        else{
            estado=false;
        }
        con=0;
        sleep(2000);
    }
    //console.log(con);
    
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }