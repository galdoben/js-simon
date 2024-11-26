
// 5 numeri casuali
let number1 = [Math.floor((Math.random() * 100) + 1)];
let number2 = [Math.floor((Math.random() * 100) + 1)];
let number3 = [Math.floor((Math.random() * 100) + 1)];
let number4 = [Math.floor((Math.random() * 100) + 1)];
let number5 = [Math.floor((Math.random() * 100) + 1)];

// creazione array
let array = [number1, number2, number3, number4, number5];
console.log(array)
//assegno elementi al DOM
const display = document.getElementById('display');
const container1 = document.getElementById('first-num');
const container2 = document.getElementById('second-num');
const container3 = document.getElementById('third-num');
const container4 = document.getElementById('fourth-num');
const container5 = document.getElementById('fifth-num');
const input1 = document.getElementById('first-inp');
const input2 = document.getElementById('second-inp');
const input3 = document.getElementById('third-inp');
const input4 = document.getElementById('fourth-inp');
const input5 = document.getElementById('fifth-inp');

//visualizzo i nr random dalla pagina html su page
container1.innerHTML = number1
container2.innerHTML = number2
container3.innerHTML = number3
container4.innerHTML = number4
container5.innerHTML = number5
//creo un timer di 10sec
let seconds = 10;
display.innerHTML = seconds--;
const timer = setInterval(function(){
    display.innerHTML = seconds;
    if (seconds === 0){
     clearInterval(timer)
     
    }
    else{
        seconds--
    }
},1000)





