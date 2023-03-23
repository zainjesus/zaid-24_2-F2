const lotteryNumber = document.querySelectorAll('#lottery__number');
const lotteryButton = document.getElementById('lottery__button');

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

lotteryButton.addEventListener('click', () => {
    for(let i = 0; i < lotteryNumber.length; i++){
        lotteryNumber[i].textContent = getRandomInt(1, 99)
    }
})
