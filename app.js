//#1
let num1 = document.getElementById('inp')
let num2 = document.getElementById('inp1')
let buttonEl = document.getElementById('but')
let resultEl = document.getElementById('res')

buttonEl.onclick = function(){

    resultEl.textContent = (+num1.value + +num2.value)/2
}

//#2
let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let clicEl = document.getElementById('clic')
let result2El = document.getElementById('result2')

clicEl.onclick = function(){

    result2El.textContent = +number1.value % +number2.value
}

//#3
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let button3El = document.getElementById('button')
let result3El = document.getElementById('result3')

button3El.onclick = function(){

    result3El.textContent = (Math.max(input1.value, input2.value))
}

//#4
let input3 = document.getElementById('input3')
let input4 = document.getElementById('input4')
let input5 = document.getElementById('input5')
let button4El = document.getElementById('button4')
let result4El = document.getElementById('result4')

button4El.onclick = function(){

    result4El.textContent = (Math.max(input3.value, input4.value, input5.value))
}

//#5
let input6 = document.getElementById('input6')
let input7 = document.getElementById('input7')
let input8 = document.getElementById('input8')
let button5El = document.getElementById('button5')
let result5El = document.getElementById('result5')

button5El.onclick = function(){

    result5El.textContent = (Math.min(input6.value, input7.value, input8.value))
}

//#6
let moroj = document.getElementById('moroj')
let button6El = document.getElementById('button6')
let result6El = document.getElementById('result6')

button6El.onclick = function(){
    if (moroj.value == '3' || moroj.value == '5'){

        result6El.textContent = 'Yes'
    } else{
       
        result6El.textContent = 'No'
    }
}

//#7
let data = document.getElementById('data')
let button7El = document.getElementById('button7')
let result7El = document.getElementById('result7')

button7El.onclick = function(){

let date = new Date(data.value, 1, 29).getDate();
if(date == 29){
    result7El.textContent = 'Yes'
} else{
    result7El.textContent = 'No'
}
}