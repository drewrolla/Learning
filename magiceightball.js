//user can enter name in between quotes
var userName = '';

//ternary operator that will print either depending on if user enters name or not
userName ? console.log(`Hello, ${username}!`) : console.log('Hello!');

var userQuestion = 'Will we ever get to Mars?';
console.log(userQuestion);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';

//control flow using switch
switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7: 
    console.log('Signs point to yes');
    break;
}