
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Porfavor indique el ancho del rectángulo");
    ancho = parseInt(ancho);

    largo = prompt("Porfavor indique el largo del rectángulo");
    largo = parseInt(largo);

    perimetro = (ancho * 2) + (largo * 2);

    alert("Su perimetro es " + perimetro);

}
