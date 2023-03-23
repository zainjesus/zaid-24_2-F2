// Задание 1

var num = 7;

switch(num) {
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
        break;
    default:
        console.log('Вводите только числа от 1 до 9!');
}

// Задание 2

var customer = {
    name: "Eugene",
    surname: "Kiselev",
    fatherName: "Dmitrievich",
    type: 2,
    sex: true,
    isResident: true,
    id: 0,
    birthDate: null,
    passport: {
      series: "ID",
      documentNo: "12345",
      expiryDate: "01-01-2025",
      issueDate: "01-01-2015",
    },
    getFullName: function () {
      return this.surname + " " + this.name + " " + this.fatherName;
    },
    phoneNumbers: ["+996555111222", "+996700111222", "+79051112233"],
    isMobileBankingUser: true,
}

console.log (
    "Тип лица:",
    customer.type === 1 ? "Юридическое":"Физическое"
);

console.log (
    "Пол:",
    customer.sex ? "Мужской":"Женский"
);

// Задание 3

var creditCards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]; 
var visaCount = 0;
var allCardsCount = 0;

for (var creditCard of creditCards) {
    if(creditCard.startsWith("4")) {
        visaCount ++;
    }
    if(creditCard) {
        allCardsCount ++;
    }
}

console.log("Карт VISA", visaCount, "из", allCardsCount);