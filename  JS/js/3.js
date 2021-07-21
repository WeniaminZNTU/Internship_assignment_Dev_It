'use strict';

console.log('Task 3:');
console.log('result reliableMultiply:', reliableMultiply(8, 8));

function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
let result = null;

    while(result === null){
        try{
            result = primitiveMultiply(a,b);
        }catch(e){
            continue;
        }
    }

return result;
}
