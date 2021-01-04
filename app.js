'use strict'
var username = prompt("please enter your name");
console.log(username);
alert('hello ' + username + ' welcome to my website :)')
var sum = 0;
var answer1 = 'n';
var answer1 = prompt("My favmeal is mansaf ? y/n");
if (answer1.toLowerCase() === "n" || answer1.toLowerCase() === "no") {
    alert('great thats right');
    sum++;
} else if (answer1.toLowerCase() === "y" || answer1.toLowerCase() === "yes") {
    alert(' im sorry its wrong answer');
}
//console.log(answer1.toLowerCase())


var answer2 = 'y';
var answer2 = prompt("Am i 22 years ols ? y/n ");
if (answer2.toLowerCase() === "y" || answer2.toLowerCase() === "yes") {
    alert('great thats right');
    sum++;
} else if (answer2.toLowerCase() === "n" || answer2.toLowerCase() === "no") {
    alert(' im sorry its wrong answer');
}
//console.log(answer2..toLowerCase())


var answer3 = 'n';
var answer3 = prompt("Is my hobby  writing ? y/n ")
if (answer3.toLowerCase() === "n" || answer3.toLowerCase() === "no") {
    alert('great thats right');
    sum++;
} else if (answer3.toLowerCase() === "y" || answer3.toLowerCase() === "yes") {
    alert(' im sorry its wrong answer');
}
//onsole.log(answer3.toLowerCase())



var answer4 = 'y';
var answer4 = prompt("I love dogs more than cats ? y/n");
if (answer4.toLowerCase() === "y" || answer4.toLowerCase() === "yes") {
    alert('great thats right');
    sum++;
} else if (answer4.toLowerCase() === "n" || answer4.toLowerCase() === "no") {
    alert(' im sorry its wrong answer');
}
//console.log(answer4.toLowerCase())



var answer5 = 'y';
var answer5 = prompt("My favmovie is (the purssuite of happieness) ? y/n ");
if (answer5.toLowerCase() === "y" || answer5.toLowerCase() === "yes") {
    alert('great thats right');
    sum++;
} else if (answer5.toLowerCase() === "n" || answer5.toLowerCase() === "no") {
    alert(' im sorry its wrong answer');
}
//console.log(answer5.toLowerCase())




alert('thanks for your time dear  ' + username + ' nice to meet you ');
document.write("have a nice day " + username);
