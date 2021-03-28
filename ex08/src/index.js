// Only change code below this line 
var one = new Set([1,2,3,4,5]);
var two = new Set([6,4,3,2]);

var unionSet = new Set();
var intersectionSet = new Set();
var differenceSet = new Set();


for (var oneVal of one) {
    unionSet.add(oneVal);
}
for (var twoVal of two) {
    unionSet.add(twoVal);
}

for (var oneVal of one) {
    if (two.has(oneVal)) {
        intersectionSet.add(oneVal);
    }
}

for (var oneVal of one) {
    if (!two.has(oneVal)) {
        differenceSet.add(oneVal);
    }
}

console.log(one);
console.log(two);
console.log();
console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);
// Only change code above this line 
module.exports= {unionSet,intersectionSet,differenceSet};