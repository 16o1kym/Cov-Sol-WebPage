function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;

var correct = 0;

if (question1 == "face mask"){
    correct++;
}
if (question2 == "Maintain 6 Feet Distance at all times"){
    correct++;
}
if (question3 == "Sanitizer"){
    correct++;
}
if (question4 == "Wash your hands after touching any Surface"){
    correct++;
}
if (question5 == "Do not go out unless absolutely necessary"){
    correct++;
}
var messages = ["Excellent!, You are very Precautious","Great job!", "Good job! Better safe than sorry!", "You need to be more precautious!", "#Stayhome #StaySafe"];
var pictures = ["imgaes/Excellent.jpg","images/Great-job.jpg","images/Good-job.jpg","images/Stay-safe.jpg","images/ShSs.jpg"];
var range;

if (correct <= 1 ){
    range = 4
}

if (correct > 1 && correct < 3){
    range = 3
}
if (correct > 2 && correct < 4 ){
    range = 2
}
if (correct >3 && correct < 5){
    range = 1
}
if (correct >4){
    range=0
}

document.getElementById("after_submit").style.visibility = "visible";

 document.getElementById("message").innerHTML= messages[range]
 document.getElementById("number_correct").innerHTML= "You got " +  correct  + " right.";
 document.getElementById("picture").src=pictures[range];
}