var goodDrivingRecord = false;
var age = 12;
if (goodDrivingRecord === true && age > 25){
    console.log("You get a discount on your car rental!");
}
else if (goodDrivingRecord === true || age > 25) {
        console.log("You should pay full price.");
}
else if (goodDrivingRecord !== true && age < 25){
        console.log("You must have someone else sign for the rental.");
}


