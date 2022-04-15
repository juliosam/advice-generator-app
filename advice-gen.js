const boton = document.querySelector(".card__button");
const consejo = document.querySelector(".card__paragraph-inside")
const adviceID = document.querySelector(".card__title-number")

const azar = function(){ return  Math.floor(Math.random()*(224-0))}

const fetcher = function(){
fetch(`https://api.adviceslip.com/advice/${azar()}`)
.then(res=>res.json())
.then(data => {
    consejo.innerHTML = data.slip.advice
    adviceID.innerHTML = data.slip.id
     })
}

boton.addEventListener('click', fetcher)