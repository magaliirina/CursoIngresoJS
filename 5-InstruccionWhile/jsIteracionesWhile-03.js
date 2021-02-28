/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave= 0;
	//let contador= 0;
	clave= prompt("Ingrese la clave");

	while(!(clave== "utn750")){
		clave= prompt("Clave Invalida ingrese de nuevo:")
	}
	alert("Bienvenidos los buenos aventurados");



	//ERROR
	/*while(clave!= "utn750"){
		clave=prompt("Ingrese la clave");
		if(clave== "utn750"){
			break;
		}
		else{
		alert("Intente de nuevo");
		contador++;
		console.log(contador);
		}
	}
	console.log("Bienvenido");*/

}//FIN DE LA FUNCIÓN
