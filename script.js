


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

answer1.innerText = getRandom();
answer2.innerText = getRandom();
answer3.innerText = getRandom();
answer4.innerText = getRandom();

value1.innerText = putThisToValue1;
value2.innerText = putThisToValue2;

var correctAnswer = putThisToValue1 + putThisToValue2;

answer3.innerText = correctAnswer;

//on answer click function
function onAnswerClick(clicked_id){
    // alert(clicked_id)
    var clicked = document.getElementById(clicked_id);
    if(clicked.innerText == correctAnswer){
        alert("Correct!!!");
    }else{
        alert("Wrong Answer!!!")
    }
}

answer1.style.color = "red";  