const currentNum = document.getElementsByClassName('num');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('reduce-btn');
const resetBtn = document.getElementById('reset-btn');
let newNum;

//increased button
increaseBtn.addEventListener('click', function(){
    newNum = Number(currentNum[0].innerHTML) +1 ;
    currentNum[0].innerHTML = newNum;    
})
//decreased button
decreaseBtn.addEventListener('click', function(){
    newNum = Number(currentNum[0].innerHTML) - 1;
    currentNum[0].innerHTML = newNum;
})
// reset
resetBtn.addEventListener('click',function(){
    currentNum[0].innerHTML = 0;
} )