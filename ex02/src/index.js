// Only change below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
   
    }

function*insideGenerator1 (){
    let x=0;
    for(let i = 1; i <= 5; i++){
        
       x=(yield i);
           
    } return x;
}
function*insideGenerator2(){
    let x=0;
    for(let i = 10; i <= 15; i++){
            
        x=(yield i);
                
    } return x;
}
function*insideGenerator3(){
    let x=0;
    for (var i=6;i<=9;i++) {
        x=(yield i);
        
    }
    return x;
}
var iterator =myGenerator();
var fifteenArray= [];

for(var i=0;i<16;i++) {
    var item = iterator.next().value;
    fifteenArray.push(item+(item===undefined?"!":"#"));
}      
    
console.log(fifteenArray);
//Only change code above this line
module.exports = {fifteenArray, myGenerator};