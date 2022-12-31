let favs=Array.from(document.querySelectorAll('.favoris'));
let delet=Array.from(document.querySelectorAll('.delete'))
let btnsPlus=Array.from(document.querySelectorAll('.btnPlus'))
let btnsMoin=Array.from(document.querySelectorAll('.btnMoin'))
let container=Array.from(document.querySelectorAll('.card-img'))




for(let fav of favs){
    fav.addEventListener('click', function(){
        if(fav.style.background =='black'){
            fav.style.background='red'
        }else{
            fav.style.background='black'
        }
    })
}

for(let i in delet )
delet[i].addEventListener('click',function(){
    container[i].remove()
})


for(let btnPlus of btnsPlus){
    btnPlus.addEventListener('click',function(){
        btnPlus.previousElementSibling.innerHTML++
        geTtotal()
     })
   

}


// for(let i in btnsMoin)
// btnsMoin[i].addEventListener('click',function(){
//     btnsMoin[i].nextElementSibling.innerHTML >0?
//     btnsMoin[i].nextElementSibling.innerHTML-- :
//     0
// })
for(let btnMoin of btnsMoin){
    btnMoin.addEventListener('click',function(){
        btnMoin.nextElementSibling.innerHTML >0?
        btnMoin.nextElementSibling.innerHTML-- :
        null
        geTtotal()
  
  })

}



function geTtotal(){
    let quantité=Array.from(document.querySelectorAll('.quantité'))
    let price=Array.from(document.querySelectorAll('.price'))

    let s=0
    for( let i=0;i<price.length;i++){
       s= s+ price[i].innerHTML * quantité[i].innerHTML
    }
document.getElementById("totale").innerHTML= s + 'dt'

}

function message(){
    return window.confirm(`thanks for purchase`)
}


