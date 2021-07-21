'use strict';
import {testData, testData2} from './input data.js';

let result = array_combine(testData, testData2);

console.log('Task 12:');
console.log(result);

function array_combine(keys, values){
    const tempMap = new Map();

    for(let i = 0; i < keys.length; i++){
        if((!!keys[i]) && keys[i] != true){
            tempMap.set(keys[i], values[i]);
        }
    }
return Object.fromEntries(tempMap.entries());
}




