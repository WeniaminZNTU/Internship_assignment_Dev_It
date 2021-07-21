'use strict';
import {testData3} from './input data.js';

let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]

console.log('Task 11:');
console.log(result);
console.log(result2);

function array_pluck(arr, string){

    const path = string.split('.');
    string = path[path.length - 1];

    const foundData = [];

    const deepSearch = (object) => {
        for(let keys in object){
            if(string === keys){
                foundData.push(object[keys]);
            }
            if((typeof object[keys]) === 'object'){
                deepSearch(object[keys]);
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        deepSearch(arr[i]);
    }

return foundData;
}