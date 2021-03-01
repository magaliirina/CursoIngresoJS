/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	
	let numeroIngresado;
	//El max y el min van a ser el primer numero que ingrese el usuario
	let maximo;
	let minimo;
	let respuesta;
	flag=0;

	do{
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		//como es la primera vez ponemos una bandera
		if(flag==0){
			maximo= numeroIngresado;
			console.log("max" + maximo);
			minimo= numeroIngresado;
			console.log("min" + minimo);
			flag=1;
		}

		if(numeroIngresado>maximo){
			maximo=numeroIngresado;
			console.log("max" + maximo);
		}else if (numeroIngresado<minimo){
			minimo=numeroIngresado;
			console.log("min" + minimo);
		}

		respuesta= confirm("¿Desea ingresar otro numero?");
	}while(respuesta==true);

	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;
	
	

	
	/*// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/
}//FIN DE LA FUNCIÓN