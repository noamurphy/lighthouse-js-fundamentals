const min = 100;
const max = 200;
const divisors = [3, 4];
const names = ["Loopy", "Lighthouse"];

let loopyLighthouseCheck = function(num){
  if(num % (divisors[0] * divisors[1]) === 0){
    return(names[0] + names[1]);
  }
  else if(num % divisors[0] === 0){
    return(names[0]);
  }
  else if(num % divisors[1] === 0){
    return(names[1]);
  }
  else {
    return(null);
  }
}
for (let x = min; x <= max; x++){
  if (loopyLighthouseCheck(x) != null){
    console.log(loopyLighthouseCheck(x));
  }
  else{
    console.log(x);
  }
}