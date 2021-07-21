'use strict';
import {testData} from './input data.js';


let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, "asd") // []

console.log('Task 8:');
console.log(result);
console.log(result2);
console.log(result3);

function array_skip_until(arr, value){

    let isDelete = true;

    return arr.filter((arrValue)=>{

        if(isDelete === true){
            if(arrValue === value){
                isDelete = false;
                return true;
            }
            else return false;
        }

        if(isDelete === false){
            return true;
        }
    })
}
