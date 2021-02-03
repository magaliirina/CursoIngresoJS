/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let aumento;
	let porcentaje = 10;
	let importeAumentado;
	//forma optima porque es escalable (puedo cambiar el porcentaje)

	importe = txtIdSueldo.value;
	importe = parseInt(importe);

	aumento = importe * porcentaje / 100;

	importeAumentado = importe + aumento;


	txtIdResultado.value = importeAumentado;
}
