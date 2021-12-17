const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const board = document.querySelector('#board')
const colors = ['red', 'blue',  'Salmon ',   'Gold ',   'GreenYellow ',  'Aqua ',    'Brown ', ]

let time = 0
let score = 0
const timeL = document.querySelector('#time')
const timelist = document.querySelector('#time-list')
startBtn.addEventListener('click',(event) => 
{
event.preventDefault()
screens[0].classList.add('up')
})


timelist.addEventListener('click',event => 
{
    if (event.target.classList.contains('time-btn'))
    {console.log( time = parseInt(event.target.getAttribute('data-time')))
    
    screens[0].classList.add('up') 
    startGame()  
}
})

board.addEventListener('click',event => {
if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()  
    createRanomCircle()
}

})
 

function startGame() {
screens[1].classList.add('up') 
setInterval(decreaseTime,1000)
createRanomCircle()
// timeL.innerHTML = `00:${time}`
setTime(time)
}

function decreaseTime(){
 if (time===0){finishGame()}
     else{
        let current = --time
        if (current<10) {current = `0${current}`
            }
         setTime(current)
        
        }  
     }
   


function setTime(value){
    timeL.innerHTML = `00:${value}`

}
function finishGame(){
board.innerHTML = `<h1>Ващ Счет:<span class="primary">${score}</span></h1>`
 timeL.parentNode.classList.add('hide')
}

function createRanomCircle(){
    const circle = document.createElement ('div')
    const size = getRandomNumber(10,60)
    const {width,height} = board.getBoundingClientRect()
    const color = getRandomColor()
    const x = getRandomNumber(0,width - size)
    const y = getRandomNumber(0,height - size)
circle.style.backgroundColor = color 
circle.classList.add('circle')
circle.style.width = `${size}px`
circle.style.height = `${size}px`
circle.style.top = `${y}px`
circle.style.left = `${x}px`
circle.style.color = 
board.append(circle)

}

function getRandomColor() {

    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
    }

function getRandomNumber(min,max)
{ return Math.round(Math.random()*(max-min)+min)}


   

// COLORS

    
    
   

        
        
    