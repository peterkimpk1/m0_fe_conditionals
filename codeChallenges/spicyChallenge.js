// If divisible by 3 & 5 then print FizzBuzz
// If divisible by 3 and not by 5 then print Fizz
// If divisible by 5 and not by 3 then print Buzz
// Any other number that doesn't meet those conditions, print the number

var stringNumber = 5;
if (stringNumber %3 === 0 && stringNumber %5===0){
    console.log("FizzBuzz");
}
else if (stringNumber %5 ===0 && stringNumber %3 !==0 ) {
    console.log("Buzz");
}
else if (stringNumber %3 ===0 && stringNumber %5 !==0) {
    console.log("Fizz");
}
else {
    console.log(stringNumber);
}