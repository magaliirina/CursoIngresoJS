function mostrar()
{
    let precio;
    let descuento;
    let descuentoFinal;
    let precioFinal;

    precio = prompt("Indique el Precio");
    precio = parseInt(precio);

    descuento = prompt("Indique el descuento ... %");
    descuento = parseInt(descuento);

    descuentoFinal = 100 - descuento;

    precioFinal = descuentoFinal * precio / 100;

    elPrecioFinal.value = precioFinal;
}
