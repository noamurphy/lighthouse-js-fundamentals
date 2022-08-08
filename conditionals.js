/*
//First conditionals exercise
const raining = true;
const cold = false;

if (raining){
  console.log("Don't forget your umbrella!");
}

if (cold){
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/

//Second conditionals exercise
const temperature = 41;


if (temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea...");
}
else if (temperature < 0){
  console.log("Make sure you pick up a scarf!");
}
else if(temperature < 15){
  console.log("short sleeves won't cut it!");
}
else{
  console.log("Short sleeves are fine.")
}