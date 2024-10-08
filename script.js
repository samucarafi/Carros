let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let number = document.querySelector('.number')
let container = document.querySelector('.container')
let items=  container.querySelectorAll('.list .item')
let indicator= document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list=container.querySelector('.list')

let active=0
let firstPosition = 0
let lastPosition= items.length - 1

function altCar(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    items[active].classList.add('active')

    let dotsOld=indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    number.innerHTML=`0${active+1}`
}

nextButton.onclick=()=>{
    list.style.setProperty('--calculation',1)//muda propriedade que multiplica posição que carro desliza, neste caso da direita para esquerda
    active==lastPosition? active=firstPosition : active++
    altCar()
}

prevButton.onclick=()=>{
    list.style.setProperty('--calculation',-1)//muda propriedade que multiplica posição que carro desliza, neste caso da esquerda para direita
    active==firstPosition?active=lastPosition:active--
    altCar()
}
