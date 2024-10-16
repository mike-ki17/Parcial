function calcularPrecioConDescuento(marca, precioOriginal) {
    let descuento;

    switch (marca.toUpperCase()) {
        case 'HONDA':
            descuento = 0.05; 
            break;
        case 'YAMAHA':
            descuento = 0.08; 
            break;
        case 'SUZUKI':
            descuento = 0.10;
            break;
        default:
            descuento = 0.02; 
            break;
    }

    let precioFinal = precioOriginal - (precioOriginal * descuento);
    return precioFinal.toFixed(2); 
}

document.getElementById('calcular').addEventListener('click', function() {
    let marca = document.getElementById('marca').value; 
    let precioOriginal = parseFloat(document.getElementById('precio').value);
    let text = document.getElementById('text')
    let precioConDescuento = calcularPrecioConDescuento(marca, precioOriginal)[0];
    text.innerHTML = (`El precio final de la ${marca} es: $${precioConDescuento} con un descuento del `); 
});
