function mostrar()
{
    let primerNumero;
    let segundoNumero;
    let resta;
    let suma;
    
    primerNumero = parseInt(prompt("Ingrese el primer número"));
    segundoNumero = parseInt(prompt("Ingrese el segundo número"));
    
    resta = primerNumero - segundoNumero;
    suma =  primerNumero + segundoNumero;
    
    if (primerNumero == segundoNumero){
        alert("El resultado es " + primerNumero + segundoNumero);
    }
    else{
    
        if(primerNumero > segundoNumero){
            alert("El resultado es " + resta);
        }
        else{
            if(primerNumero < segundoNumero && suma <= 10){
                alert("El resultado es " + suma );
            }
            else{
                alert("El resultado es " + suma + " y supera a 10");
            }
        }
    }
    // if(primerNumero == segundoNumero){
        //     alert("El resultado es " + primerNumero + segundoNumero);
        // }
        // else if(primerNumero > segundoNumero){
            //     resta = primerNumero - segundoNumero;
            //     alert("El resultado es " + resta);
            // }
            // else{
                //     suma = primerNumero + segundoNumero;
                //     alert("El resultado es " + suma);
                
                //     if(suma > 10){
                    //         alert("supera a 10");
    //     }
    // }
    
}
