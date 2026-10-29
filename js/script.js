let ventana8 = document.getElementById("ventana8");
let informacionVentana8 = document.getElementById("informacion-ventana8");
let sonido8 = document.getElementById("audio1");
let visible8 = false;

ventana8.onclick = function () {
    if(visible8 == true){
        visible8 = false;
        informacionVentana8.style.opacity = "0";
    }
    else{
        visible8 = true;
        informacionVentana8.style.opacity = "1";
    }
    sonido8.play();
};

let ventana9 = document.getElementById("ventana9");
let informacionVentana9 = document.getElementById("informacion-ventana9");
let sonido9 = document.getElementById("audio2");
let visible9 = false;

ventana9.onclick = function () {
    if(visible9 == true){
        visible9 = false;
        informacionVentana9.style.opacity = "0";
    }
    else{
        visible9 = true;
        informacionVentana9.style.opacity = "1";
    }
    sonido9.play();
};

let ventana10 = document.getElementById("ventana10");
let informacionVentana10 = document.getElementById("informacion-ventana10");
let sonido10 = document.getElementById("audio3");
let visible10 = false;

ventana10.onclick = function () {
    if(visible10 == true){
        visible10 = false;
        informacionVentana10.style.opacity = "0";
    }
    else{
        visible10 = true;
        informacionVentana10.style.opacity = "1";
    }
    sonido10.play();
};

let ventana11 = document.getElementById("ventana11");
let informacionVentana11 = document.getElementById("informacion-ventana11");
let sonido11 = document.getElementById("audio1");
let visible11 = false;

ventana11.onclick = function () {
    if(visible11 == true){
        visible11 = false;
        informacionVentana11.style.opacity = "0";
    }
    else{
        visible11 = true;
        informacionVentana11.style.opacity = "1";
    }
    sonido11.play();
};

let ventana12 = document.getElementById("ventana12");
let informacionVentana12 = document.getElementById("informacion-ventana12");
let sonido12 = document.getElementById("audio2");
let visible12 = false;

ventana12.onclick = function () {
    if(visible12 == true){
        visible12 = false;
        informacionVentana12.style.opacity = "0";
    }
    else{
        visible12 = true;
        informacionVentana12.style.opacity = "1";
    }
    sonido12.play();
};


let elementoHora = document.getElementById("hora");

function actualizarReloj() {
  let ahora = new Date();
  let horas = String(ahora.getHours()).padStart(2, "0");
  let minutos = String(ahora.getMinutes()).padStart(2, "0");
  let segundos = String(ahora.getSeconds()).padStart(2, "0");
  elementoHora.textContent = horas + ":" + minutos + ":" + segundos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);


let textoVentana8 = document.getElementById("texto-ventana8");
let textoVentana9 = document.getElementById("texto-ventana9");
let textoVentana10 = document.getElementById("texto-ventana10");
let textoVentana11 = document.getElementById("texto-ventana11");
let textoVentana12 = document.getElementById("texto-ventana12");

function actualizarContenido() {
  let ahora = new Date();
  let horas = ahora.getHours();

  if (horas >= 6 && horas < 12) {

    textoVentana8.innerHTML = "<b>Ken</b>, de 30 años, se levanta temprano, entrena, se arregla el cabello y elige un atuendo que combine con el de Barbie.";
    textoVentana9.innerHTML = "<b>Skipper</b>, de 12 años, se despierta, revisa sus mensajes, escucha música con audífonos y prepara su cámara antes de desayunar con sus hermanas.";
    textoVentana10.innerHTML = "<b>Stacie</b>, de 16 años, se levanta temprano, sale a correr y hace ejercicios de velocidad y coordinación. Después desayuna y organiza su agenda deportiva.";
    textoVentana11.innerHTML = "<b>Chelsea</b>, de 8 años, sigue durmiendo mientras sus hermanas se preparan para el día. Después se despierta, desayuna y elige su juguete favorito para llevar consigo.";
    textoVentana12.innerHTML = "<b>Barbie</b>, de 25 años, se despierta en la Dreamhouse, hace ejercicio, se arregla y desayuna con sus hermanas antes de comenzar su jornada.";
  } else if (horas >= 12 && horas < 14) {

    textoVentana8.innerHTML = "<b>Ken</b>, de 30 años, almuerza con Barbie en un restaurante de Malibú e intenta sorprenderla con una cita especial, pero se encuentra con Ryan, quien también quería verla.";
    textoVentana9.innerHTML = "<b>Skipper</b>, de 12 años, almuerza con Stacie y Chelsea y graba un video de sus hermanas, mientras Chelsea hace caras frente a la cámara.";
    textoVentana10.innerHTML = "<b>Stacie</b>, de 16 años, almuerza con sus hermanas y aprovecha para planificar los entrenamientos de la tarde.";
    textoVentana11.innerHTML = "<b>Chelsea</b>, de 8 años, almuerza y guarda un dulce para después. También intenta convencer a Stacie de que comparta su postre.";
    textoVentana12.innerHTML = "<b>Barbie</b>, de 25 años, almuerza con Ken en un restaurante de Malibú, pero Ryan aparece e intenta unirse a la cita para llamar su atención.";
  } else if (horas >= 14 && horas < 18) {

    textoVentana8.innerHTML = "<b>Ken</b>, de 30 años, trabaja como modelo en una sesión fotográfica y aprovecha para preguntar si Barbie tiene algún compromiso ese día.";
    textoVentana9.innerHTML = "<b>Skipper</b>, de 12 años, asiste a clases y aprovecha los descansos para grabar videos y fotografiar situaciones curiosas de su entorno.";
    textoVentana10.innerHTML = "<b>Stacie</b>, de 16 años, asiste a clases y participa en entrenamientos deportivos para mejorar su rendimiento y prepararse para sus próximas competencias.";
    textoVentana11.innerHTML = "<b>Chelsea</b>, de 8 años, asiste a clases, participa en actividades creativas y sorprende a su profesora con sus preguntas e ideas ingeniosas.";
    textoVentana12.innerHTML = "<b>Barbie</b>, de 25 años, trabaja en una de sus múltiples profesiones. Ese día participa en una sesión de fotos para una campaña de moda.";
  } else {

    textoVentana8.innerHTML = "<b>Ken</b>, de 30 años, cena con Barbie y después ve una película con ella en la sala de la Dreamhouse.";
    textoVentana9.innerHTML = "<b>Skipper</b>, de 12 años, edita las fotos y los videos que grabó durante el día antes de irse a dormir.";
    textoVentana10.innerHTML = "<b>Stacie</b>, de 16 años, estira, descansa y revisa su rendimiento del día antes de dormir.";
    textoVentana11.innerHTML = "<b>Chelsea</b>, de 8 años, cena, se pone la pijama y le pide a sus hermanas que le lean un cuento antes de dormir.";
    textoVentana12.innerHTML = "<b>Barbie</b>, de 25 años, cena con sus hermanas y planea el día siguiente antes de descansar.";
  }
}


actualizarContenido();


setInterval(actualizarContenido, 60000);


