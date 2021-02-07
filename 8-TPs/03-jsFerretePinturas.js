/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Fahrenheit a Celsius   C =(F-32)*5/9
    let gradosFahrenheit;
    let gradosCelsius;

    gradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradosCelsius = (gradosFahrenheit - 32) * 5 / 9;

    alert("La temperatura en Celsius equivale a " + gradosCelsius + "Cº");
	
}

function CentigradosFahrenheit () 
{
    //Celsius a Fahrenheit  F = C*9/5+32
    let gradosCelsius;
    let gradosFahrenheit;

    gradosCelsius = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradosFahrenheit= gradosCelsius * 9 / 5 + 32;
   

    alert("La temperatura en Celsius equivale a " + gradosFahrenheit + "Fº");
	
	
}
