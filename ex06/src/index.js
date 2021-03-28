// Only change code below this line 
let rockStar = new Map(
    [
        ["artist","The Rolling Stones"],
        ["song","Angie"],
        ["album","Goats Head Soup"],
        ["singer","Mick Jagger"]
    ]
);

var newRock = new Map();
for (var key of rockStar.keys()) {
    if (key[0].localeCompare("a")==1) {
        newRock.set(key,rockStar.get(key));
    }
}
 
 console.log(newRock);
// Only change code above this line 
module. exports ={rockStar, newRock};