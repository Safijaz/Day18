// Only change code below this line 
var numberArray = [9,5,4,11,5,12,13,15,4,2,5];

var numberSet = new Set();

for (var value of numberArray) {
    numberSet.add(value);
}


var uniqueArray = [];
for (var value of numberSet) {
    uniqueArray.push(value);
}

uniqueArray.sort(compareFunc);

console.log(uniqueArray);

function compareFunc(left,right) {
    return Math.sign(left-right);
}
// Only change code above this line 
module.exports = {numberArray, uniqueArray};