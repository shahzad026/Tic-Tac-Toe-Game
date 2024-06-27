window.addEventListener('load', bindEvents);
var buttons;
function bindEvents(){
buttons = document.getElementsByTagName('button');
console.log(buttons);
for(var i = 0; i<buttons.length; i++){
    var currentButton = buttons[i];
    currentButton.addEventListener('click', printXorZero); // Event Binding
}
}
function isNotBlank(currentButton){
    return currentButton.innerText.trim().length>0
}

function isThreeSame(first, second, third){
    if(isNotBlank(first) && isNotBlank(second) && isNotBlank(third)){
    return first.innerText == second.innerText && first.innerText == third.innerText;
    }
    else{
        return false;
    }
}
// Maintain a Count , to check if count goes
// > 4 then check game over conditions
function isGameOver(){
    return isThreeSame(buttons[0], buttons[1], buttons[2]) 
    ||  isThreeSame(buttons[3], buttons[4], buttons[5]) 
    ||  isThreeSame(buttons[6], buttons[7], buttons[8])
    ||  isThreeSame(buttons[0], buttons[3], buttons[6])
    ||  isThreeSame(buttons[1], buttons[4], buttons[7])
    ||  isThreeSame(buttons[2], buttons[5], buttons[8])
    ||  isThreeSame(buttons[0], buttons[4], buttons[8])
    ||  isThreeSame(buttons[2], buttons[4], buttons[6])
    // In game over conditions
    // 1. Row values are same
    // 2. Cols Values are same
    // 3. Diagonal values are same
}
function reset(){
    clearInterval(interval);
    blocked = false;
    count = 0;
    flag = true;
    countDownValue = 5;
    for(var i = 0; i<buttons.length; i++){
        buttons[i].innerText = '';
    }
    document.getElementById('output').innerText = '';
}
var countDownValue = 5;
var interval;
function countDown(){
    interval = setInterval(function(){
        countDownValue--;
        document.getElementById('output').innerText = `Game Over and Reset After ${countDownValue} Sec`;    
    },1000);
}
function resetAfter5Sec(){
    countDown();
    // Open a New Thread
    setTimeout(function(){
        reset();
    }, 5000);
    console.log('Doing Something else');
}
var flag = true;
var count = 0;
var blocked = false;
function printXorZero(){
    if(!blocked &&  this.innerText.trim().length ==0){
        count++;
        
    var buttonValue = flag?"X":"0";
    this.innerText = buttonValue; // <button>X</button>
    flag = !flag;
    if(count>=5){
           if(isGameOver()){
                blocked = true;
                document.getElementById('output').innerText = 'Game Over and Reset After 5 Sec';    
                resetAfter5Sec();
                //alert("Game Over");
           }
    }
    }
    //alert("U Click on button");
}

