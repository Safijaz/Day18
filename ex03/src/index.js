// Only change code below this line
function* myGenerator(num1,num2,num3) {
        
        yield* [1,2,3,4,5];

        yield* 'Arena';
        
        yield num1;
        yield num2;
        yield num3;    
    }
    

    var iterator = myGenerator(6,7,8);
    var generatorArray = [];
    
    
    for (var item of iterator) {
     generatorArray.push(item);   
    }

    console.log(generatorArray);
// Only change code above this line 
module.exports={ generatorArray,myGenerator};
