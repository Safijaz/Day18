// Only change code below this line 
let shoppingList = new Map (
    [
        ["Banana",6],
        ["Pineapple",1],
        ["Pear",8],
        ["Carrot",12],
        ["Apple",11]
    ]
);

let arrKey = [];
let arrValue = [];

for (var key of shoppingList.keys()) {
    arrKey.push(key);
}
for (var key of arrKey) {
    console.log("groceries:  "+key);
}

for (var value of shoppingList.values()) {
    arrValue.push(value);
}


for (var value of arrValue) {
    console.log("amount:  "+value);
}


for (var entry of shoppingList.entries()) {
    console.log (entry);
}


//  Only change code above
module.exports = {shoppingList,arrKey,arrValue};