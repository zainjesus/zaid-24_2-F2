const pTag = document.getElementById('text');
const radioOne = document.getElementById('one');
const radioTwo = document.getElementById('two');
const radioThree = document.getElementById('three');

const words = pTag.textContent.split(" ");
let markedWords = [];

const markWords = () => {
    markedWords = [];
    for(let i in words){
        let word = words[i];
        if(radioOne.checked && word.length > 8){
            word = `<mark>${word}</mark>`;
        }else if(radioTwo.checked && /^[аеёиоуыэюя]/i.test(word) && word.length > 1){
            word = `<mark>${word}</mark>`;
        }else if(radioThree.checked && /ть?ся$/.test(word)){
            word = `<mark>${word}</mark>`;
        }
        markedWords.push(word);
    }
    pTag.innerHTML = markedWords.join(" ");
}

radioOne.addEventListener("click", markWords);
radioTwo.addEventListener("click", markWords);
radioThree.addEventListener("click", markWords);
