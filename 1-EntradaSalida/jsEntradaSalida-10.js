/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let porcentaje = 25;
	let importeFinal;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	descuento = ( importe * porcentaje ) / 100;
	importeFinal = importe - descuento;
	
	txtIdResultado.value = importeFinal;
	
}
