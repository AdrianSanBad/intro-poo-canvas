const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//obtener el tamaño de la ventana actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;
//toma el alto de la ventana y lo asigna al alto del canvas
canvas.height = window_height;
//toma el ancho de la ventana y lo asigna al ancho del canvas
canvas.width = window_width;
//cambia el color de fondo del canvas
canvas.style.background = '#ff8';

//clase que crea un circulo
class Circle{
    //constructor de la clase
    constructor(x,y,radio,color,texto){
        this.x = x; //posicion en x
        this.y = y; //posicion en y
        this.radio = radio; //radio del circulo
        this.color = color; //color del circulo
        this.texto = texto; //texto del circulo
    }
    //metodo que dibuja el circulo
    dibujar(context){
        context.beginPath(); // Iniciar el dibujo
        context.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false); // Dibujar el círculo
        context.strokeStyle = this.color; // Establecer el color del borde
        context.lineWidth = 3; // Establecer el grosor de la línea
        context.stroke(); // Dibujar el borde del círculo
        context.textAlign = 'center'; // Alinear el texto al centro horizontalmente
        context.textBaseline = 'middle'; // Alinear el texto al centro verticalmente
        context.fillText(this.texto, this.x, this.y); // Escribir el texto
        context.closePath(); // Finalizar el dibujo

    }
}
let arrayCirculos = [];
for (let i = 0;i<10; i++){
    let randomX = Math.random()*window_width;
    let randomY = Math.random()*window_height;
    let randomradio = Math.floor(Math.random()*100)+10;
    let miCirculo = new Circle(randomX,randomY,randomradio,'red',i+1);
    arrayCirculos.push(miCirculo);
    arrayCirculos[i].dibujar(ctx);
}

//ejemplos de uso de la clase Circle
/*  let miCirculo = new Circle(100,100,50,'red','Tec');
miCirculo.dibujar(ctx);
let miCirculo2 = new Circle(200,200,50,'blue','Pachuca');
miCirculo2.dibujar(ctx);  */