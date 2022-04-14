let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 14;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`The race will begin at 9:30 for those who registered early. The race number is ${raceNumber}.`);
} else if (!early && age > 18) {
  console.log(`Those who registered later will run at 11:00 am. The race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Youth registrants run at 12:30 pm regardless of registration. The race number is ${raceNumber}.`);
} else {
  console.log('Please come to the registration desk.');
}