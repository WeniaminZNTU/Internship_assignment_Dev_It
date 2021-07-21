'use strict';

const convolutionArray = [[1,2,3],[4,5],[6]];

console.log('Task 2:');
console.log('pre-roll:', convolutionArray);
console.log('after convolution:',convolution([[1,2,3],[4,5],[6]]));


function convolution(arr){
    
    arr = arr.concat(arr.reduce((prev,curr,index)=>{
        prev.push(...curr);
        return prev;

    }));
return arr[0];
}

