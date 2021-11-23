


//array of numbers
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,50];

//get a random number from the array
function getRandom() {
    var random = numbers[Math.floor(Math.random()*numbers.length)];
    return random;
}


var putThisToValue1 = getRandom();
var putThisToValue2 = getRandom();

var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");


value1.innerText = putThisToValue1;
value2.innerText = putThisToValue2;

answer1.style.color = "red";  