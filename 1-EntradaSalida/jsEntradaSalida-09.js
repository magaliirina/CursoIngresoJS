/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let resultado;

	importe = txtIdSueldo.value;
	importe = parseInt(importe);

	resultado = importe * 1.1

	txtIdResultado.value = resultado
}
