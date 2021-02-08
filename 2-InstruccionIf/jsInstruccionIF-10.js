function mostrar()
{
	let numeroRandom;
	let maximo = 10;
	let minimo = 1;
	let mensaje;

	numeroRandom = Math.round(Math.random() * (maximo-minimo) + minimo);

	if (numeroRandom >= 9){
		mensaje = " Excelente";
	}
	else if (numeroRandom < 9 && numeroRandom >= 4){
		mensaje = " APROBO";
	}
	else {
		mensaje = " Vamos, la proxima se puede";
	}

	alert("Su nota fue " + numeroRandom + mensaje);
}//FIN DE LA FUNCIÓN