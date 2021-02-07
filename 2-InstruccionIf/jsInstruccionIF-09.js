function mostrar()
{
	let numero;
	//numeros maximos y minimos de mi rango
	let maximo = 10;
	let minimo = 1;
	
	//Math.round redondea a numero mas cercano
	//Math.random() tira un numero aleatorio entre 0 y 0.9999999
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numero);
	
}//FIN DE LA FUNCIÓN