let anioNacimiento = document.querySelector('.edad');

let hoy = new Date(2024, 10, 15); // Recuerda que los meses son 0-indexed
let result = document.getElementById('result')
function calcular() {
    let itemstime = anioNacimiento.value.split('-');
    let anio = parseInt(itemstime[0], 10);
    let mes = parseInt(itemstime[1], 10); 
    let dia = parseInt(itemstime[2], 10);

    let edadAnios = hoy.getFullYear() - anio;
    let edadMeses = hoy.getMonth() - mes;
    let edadDias = hoy.getDate() - dia;


    if (edadDias < 0) {
        edadMeses--;

        let ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        edadDias += ultimoDiaMesAnterior; 
    }

    if (edadMeses < 0) {
        edadAnios--;
        edadMeses += 12;
    }

    result.innerText  = (`Edad: ${edadAnios} años, ${edadMeses} meses, ${edadDias} días`);
}
