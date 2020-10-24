let seno = document.getElementById("seno");
let square = document.getElementById("square");
let sawtooth = document.getElementById("sawtooth");
let triangle = document.getElementById("triangle");
let volumen = document.getElementById("volumen");
let frecuencia= document.getElementById("frecuencia");
let valor_frecuencia = document.getElementById("valor_frecuencia");
let valor_ganancia = document.getElementById("valor_ganancia");
let senal = document.getElementById("tipo_senal");
const canvas = document.querySelector('#wave');
const c = canvas.getContext('2d');
canvas.width=innerWidth;
canvas.height = 300;

let osc = new Tone.Oscillator({
    frequency:2200,
    volumen:-20
});

seno.onclick = () =>{
    osc.set({
        type:"sine"
    }).toDestination; 
    senal.innerHTML="Seno";
    animacion("seno");
    osc.toDestination().start();
}
square.onclick = () =>{
    osc.set({
        type:"square"
    }).toDestination;
    senal.innerHTML="Rectangular";
    animacion("square");
    osc.toDestination().start();
}
sawtooth.onclick = () =>{
    osc.set({
        type:"sawtooth"
    }).toDestination; 
    senal.innerHTML="Rampa";
    animacion("sawtooth");
    osc.toDestination().start();
}
triangle.onclick = () =>{
    osc.set({
        type:"triangle"
    }).toDestination; 
    senal.innerHTML="Triangular";
    animacion("triangle");
    osc.toDestination().start();
}


volumen.oninput = () =>{
    valor_ganancia.innerHTML= volumen.value +" dB";
    osc.set({
        volume: volumen.value
    }).toDestination;
}
frecuencia.oninput = () =>{
    valor_frecuencia.innerHTML = frecuencia.value+" Hz";
    osc.set({
        frequency: frecuencia.value
    }).toDestination;
}
function animacion(tipo){
    let senal;
    switch (tipo){
        case "seno":
            senal = "Sine";
            break;
        case "square":
            senal="Square";
            break;
        case "sawtooth":
            senal="Sawtooth";
            break;
        case "triangle":
            senal="Triangle"
            break;
    }
    var waves = new SineWaves({
        el: document.getElementById('wave'),

        speed: 1,

        width: function() {
            return $(canvas).width();
          },
  
          height: function() {
            return 400;
          },

        wavesWidth: '100%',

        waves: [
          {
            timeModifier: 2,
            lineWidth: 2,
            amplitude: 150,
            wavelength: 100,
            segmentLength: 1,
            type: senal,
          }
        ],

        initialize: function (){

        },

        resizeEvent: function() {
          

          // Clean Up
          index = void 0;
          length = void 0;
          gradient = void 0;
        }
      });
}

/*
const frequency = 0.01;
let increment = frequency;
let amplitud;
function animation(){
    requestAnimationFrame(animation);
    c.clearRect(0,0,canvas.width,canvas.height);

    c.fillRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.moveTo(0,canvas.height/2);
    for(let i=0;i<canvas.width;i++){
        c.lineTo(i,canvas.height/2 + Math.sin(i*frecuencia.value +increment)*100);
    }
    c.strokeStyle="#000";
    c.stroke();
    c.closePath();
    increment += frequency;
}
animation();
*/