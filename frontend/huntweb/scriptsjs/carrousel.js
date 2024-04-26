var images = ["grunts/grunt-antorcha.png",
"grunts/grunt-cuchillo.png",
"grunts/grunt-enfermera.png",
"grunts/grunt-lampara.png",
"grunts/grunt-minero.png",
"grunts/grunt-pistola.png"
];

var descripciones = [ "Grunt común, si golpea hay probabilidad de incendiar",
"Grunt común, si golpea produce hemorragia",
"Grunt común, si golpea te envenena y al morir suelta un botiquín",
"Grunt común, si golpea te incendia automáticamente",
"Grunt común, si se golpea en la cabeza te prende fuego su lámpara",
"Grunt común, si te golpea hace un ruido de disparo"
];

var descriptor = document.getElementById("descrip");
var imagenElem = document.querySelector("[name='Imagen']");

var SliderDerecha = document.querySelector(".slid-der");
var SliderIzquierda = document.querySelector(".slid-izq");

var Contador = 0;

function actualizar(){
    imagenElem.src = images[Contador];
    descriptor.textContent = descripciones[Contador];
}

function MoverDerecha()
{
    Contador++;
    if(Contador > images.length - 1)
    {
        Contador = 0;
    }
    actualizar();
}

SliderDerecha.addEventListener("click", MoverDerecha);
// setInterval(MoverDerecha, 5000);


function MoverIzquierda()
{   
    Contador--;
    if(Contador < 0)
    {
        Contador = images.length -1 ;
    }
    actualizar();

}

SliderIzquierda.addEventListener("click", MoverIzquierda)

actualizar();



