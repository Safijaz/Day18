// Only change code below this line
function*myGenerator(){
 yield*[1,2,3,4,5];
 yield*'Arena';
 yield*arguments;
}
const iterator= myGenerator(6,7,8);
 generatorArray=[];
 for (let i = 0; i < iterator.length; i += 1) 
        generetorArray.push(myGenerator);
        
          

// Only change code above this line 
module.exports={ generatorArray,myGenerator};
