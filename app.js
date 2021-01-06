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


//var answer6 = '3';
//var answer6 = prompt("what is my favnumber ? ");
//if (answer6 === "2" || answer6 === "4") {
//  alert('great you are too low');
// sum++;
//} else if (answer6 === "1" || answer6 === "5") {
//  alert(' im sorry you are too high');
//}
//console.log(answer6)

//var answer6 = prompt('what is my favnumber?')
//switch(answer6){
//case'3':
// alert(' yes thats right ');
// break;
// case'5':
// case'6':
// alert('you are too high')
// break;
// case'4':
// case'2':
// alert('you are too low')
// break;
// default:
//   alert('invalid answer');
//}
//console.log(answer6)
var answer6 = '3'
//var opp = ['1', '2', '3', '4']
for (var i = 0; i < 4; i++) {
    var answer6 = prompt('what is my favnumber? ');
    if (answer6 == '3') {
        alert('thats right')
        sum++
        break;
    } else if (answer6 < 3) {
        alert('thats too low');

    }
    else if (answer6 > 3) {
        alert('thats too high');
    }
}
alert(' the right answer is 3 ');
var g = 0
var favcolor = ['blue', 'red', 'yellow', 'white'];
var correctAnswer = false;
var answer7 = prompt('what is my favcolor?');
while (g <= 5 && !correctAnswer) {
    var answer7 = prompt('what is my favcolor?');
    for (var i = 0; i < favcolor.length; i++) {
        if (favcolor[i] === answer7.toLowerCase) {
            alert('correct answer!');
            correctAnswer = true;
            sum++;
            break;
        }
    }
    g++;
}
alert('thanks for your time dear  ' + username + ' nice to meet you ' + 'your score is : ' + sum);
document.write("have a nice day " + username);


