let total = document.getElementById('total')
let descuento = document.getElementById('descuento')
let apliDesceunto = document.getElementById('apliDescuento')
let monto = document.getElementById('monto')



function apli (){
    apliDesceunto.innerHTML = `El descuento es: ${(monto.value*descuento.value)/100}`
    total.innerHTML = `El pago total es:  ${monto.value-((monto.value*descuento.value)/100)}`

}