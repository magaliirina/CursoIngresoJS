/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    
    alert("La suma de los productos es " + suma);

}
function Promedio () 
{  
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    //promedio: necesita ( ) para que de el resultado
    // para redondear un numero se usa variable.tofixed(cantidad de numeros despues del
    // punto)

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio de los produtos es " + promedio);

	
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let aumento;
    let iva = 21;
    let precioIva;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    aumento = suma * iva / 100;
    precioIva = aumento + suma;

    alert("Los productos sumarian " + precioIva + " con el 21% de IVA.");
}