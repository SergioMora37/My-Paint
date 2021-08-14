/*  Declaramos las variables, almacenando el id gracias al metodo getElementById */
var lienzo = document.getElementById("area_dibujo");
var color = document.getElementById("color");
var anchito = document.getElementById("ancho_trazo");
var boton = document.getElementById("botoncito");
var papel = lienzo.getContext("2d");
var colorcito = "black";

var estado = 0;

 /*METODOS escuchador de eventos, junto la funcion correspondiente */
boton.addEventListener("click", clearLienzo);
color.addEventListener("click", defcolor);
anchito.addEventListener("click", ancho);

/* FUNCIONES*/ 
function defcolor(c){
    colorcito = c;
    papel.strokeStyle = color.value;
}

function clearLienzo(){
    papel.clearRect(0, 0, 800, 500);
}

function ancho(value){
    papel.lineWidth = anchito.value;
    document.getElementById("ancho_trazo").innerHTML = value;
}

function dibujarLinea(evento)
{  
    x = evento.layerX;
    y = evento.layerY;
    if(estado == 1){
        papel.lineTo(x, y);
        console.log("Dibujando");
        papel.stroke();
        console.log( "Posicion x" + x + " Posicion y" + y);
        }
}
lienzo.addEventListener("mousemove", dibujarLinea);

lienzo.addEventListener("mousedown", function()
{
    estado = 1;
    papel.beginPath();
    papel.moveTo(x, y);
    console.log("Mouse Presionado");
});

lienzo.addEventListener("mouseup", function()
{
    estado = 0;
    console.log("Mouse Soltado");
    papel.closePath();
});