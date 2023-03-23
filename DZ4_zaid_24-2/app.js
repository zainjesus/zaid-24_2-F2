var button = document.getElementsByClassName('button');
var button1 = document.getElementById('clickme1');
var button2 = document.getElementById('clickme2');
var button3 = document.getElementById('clickme3');
var number = document.getElementById('number');
var counter = 0;

function cheker(){
    number.textContent = counter
    if(counter < 0){
        number.classList.add("minus")
    }else if(counter === 0){
        number.classList.remove('plus', 'minus')
    }else if(counter > 0){
        number.classList.add('plus')
    }
}

button1.addEventListener('click', function(){
    counter--;
    cheker()
})

button2.addEventListener('click', function(){
    counter = 0;
    cheker()
})


button3.addEventListener('click', function(){
    counter++;
    cheker()
})
