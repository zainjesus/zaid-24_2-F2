// Задание 1

var firstName = prompt('Введите ваше имя: ')
var surName = prompt('Введите вашу фамилию: ')

console.log('Здравствуйте!', firstName + " " + surName)

// Задание 2

var firstNum = parseInt(prompt('Введите первое число: '))
var secondNum = parseInt(prompt('Введите второе число: '))


function numComparison(){
    if(firstNum > secondNum){
        console.log(secondNum, "меньше", firstNum)
    }else if(firstNum < secondNum){
        console.log(firstNum, "меньше", secondNum)
    }else if(firstNum === secondNum){
        console.log(secondNum, "равняется", firstNum)
    }
}

numComparison(firstNum, secondNum)

// Задание 3

var intNum = 5
var sum = 0

if(intNum > 0) {
    for (i = 1; i <= intNum; i++) {
        sum += i;
    }
    console.log(sum);
}else {
    console.warn("Число должно быть целым!");
}   

// // Задание 4

multSum = parseInt(prompt("Введите число от 2 до 10"))


if(multSum < 2 || multSum > 10){
    console.warn('Вводите числа от двух до 10!!!')
}else{
    for(var i = 1; i <= 10; i++){
        var countNum = multSum * i
        console.log(multSum, "*", i, "=", countNum);
    }
}


