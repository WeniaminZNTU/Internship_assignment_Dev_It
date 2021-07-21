'use strict';

Array.prototype.append = function(...args){
    const newStateThisArray = [];
    newStateThisArray.push(...args);
    newStateThisArray.push(...this);

    for(let i = 0; i < newStateThisArray.length; i++){
        this[i] = newStateThisArray[i];
    }

}
const arr = [1,2,3];

console.log('Task 4:');
console.log('arr:', arr);
arr.append(-1, 0);
console.log('arr after append (-1,0):',arr);