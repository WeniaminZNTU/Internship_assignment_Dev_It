'use strict';
import {testData, testData2} from './input data.js';

let result = array_unique(testData.concat(testData2))

console.log('Task 10(unique):');
console.log(result);

function array_unique(arr){
const uniqSet = new Set(arr);

return [...uniqSet];
}
