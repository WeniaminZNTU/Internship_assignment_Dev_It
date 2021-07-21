'use strict';

const simpleStringArr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

console.log('Task 5:');
console.log('recursive array output:');
recuseLog(simpleStringArr);
function recuseLog(array){
    
        if(array.length != 1){
            console.log(array[0]);
            recuseLog(array.slice(1));
        }
        else{
            console.log(array[0]);
            return;
        }
}

// recuseLog(simpleStringArr);
