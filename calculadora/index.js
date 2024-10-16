

let items = [...document.querySelectorAll('.btn-s')]
let showItems = document.querySelector('.result')

for (let i = 0; i <= items.length-1; i++){
    items[i].addEventListener('click', () => {
        
        if(showItems.value.length >= 1){
            let chart = showItems.value.split('')
            for(let s = 0; s <= chart.length; s++){
                if (chart[s] == '='){
                    borrar()
                }
            }
        }
        
        showItems.value += items[i].value
    })
}



function result (){
    showItems.value = ` = ${eval(showItems.value)}`
}


function borrar (){
    showItems.value = ''
}


function borrarItem () {
    let caracteres = showItems.value.split('')
    caracteres.pop()
    showItems.value = caracteres.join('')

}