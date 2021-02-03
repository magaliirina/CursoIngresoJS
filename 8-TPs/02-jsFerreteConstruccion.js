/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    let largo;
    let largoMultiplicado;
    let ancho;
    let anchoMultiplicado;
    let vueltas = 3;
    let perimetro;

    //Lo paso a entero
    largo = txtIdLargo.value;
    largo = parseInt(largo);

    //Lo multiplico
    largoMultiplicado = largo * 2;

    //Lo paso a entero
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    //Lo multiplico
    anchoMultiplicado = ancho * 2;

    //Calculo el perimetro
    perimetro = (anchoMultiplicado + largoMultiplicado) * vueltas;

    alert("La cantidad necesaria de alambre es de " + perimetro + " metros.");

}
function Circulo () 
{
    let radio;
    let vueltas = 3;
    // Math.PI: equivale al numero PI
    //alert(Math.PI);
    let Pi = Math.PI;
    let circunferencia;

    radio = txtIdRadio.value;
    radio = parseInt(radio);

    circunferencia = 2 * Pi * radio * vueltas;

    alert("La cantidad necesaria de alambre es de " + circunferencia + " metros.");


}
function Materiales () 
{
    let largo;
    let ancho;
    let cemento = 2;
    let cementoRequerido;
    let cal = 3;
    let calRequerida;
    let superficie;

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    superficie = ancho * largo;

    cementoRequerido = superficie * cemento;
    calRequerida = superficie * cal;

    alert("Son necesarias " + calRequerida + " bolsas de cal y " + cementoRequerido + " bolsas de cemento.")
	
}