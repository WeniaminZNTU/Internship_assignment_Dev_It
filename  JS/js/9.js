'use strict';
import {testData4} from './input data.js';

let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, {age: 'float'}) // []
let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

console.log('Task 9:');
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

function array_normalize(arr, shema, transform = false){
    const outputData = [];

    const isInt = (num) => {
        return Number.isInteger(num);
    };

    const isFloat = (num) => {
        return !(Number.isInteger(num));
    };

    const isNumber = (num) => {
        if((!!num) && (isFloat(num) || isInt(num))){
            return true;
        }
        else return false;
    }

    const floatToInt = (floatNum) => {
        const strFloatNum = String(floatNum).split('');

        if((strFloatNum[strFloatNum.indexOf('.') + 1]) >= 5){
            return Math.ceil(floatNum);
        }
        else{
            return Math.floor(floatNum);
        }
    };

    const stringToNumber = (str) => {
            return Number(str);
    };
    
    const numberToString = (num) => {
        return String(num);
    }


    for(let i = 0; i < arr.length; i++){
        const currentItem = arr[i];

        const keysShema = Object.keys(shema);

        if(typeof shema === 'object'){
            for(let key in currentItem){

                const currentValue = arr[i][key];
                const typeCurrent = typeof currentValue;

                const shemaValue = shema[keysShema[0]];

                const searchedObject = {};

                if(keysShema[0] === key){

                    if(transform){
                        
                        if(shemaValue === 'string'){

                            if(typeCurrent === 'string'){
                                searchedObject[key] = currentValue;
                                outputData.push(searchedObject);    
                            }
                            if(typeCurrent === 'number'){
                                const convertedToString = String(currentValue);
                                outputData.push(convertedToString);
                            }

                        }

                        if(shemaValue === 'number' || shemaValue === 'float'){

                            if((!!stringToNumber(currentValue))){
    
                                if(typeCurrent === 'number'){
                                    searchedObject[key] = currentValue;
                                    outputData.push(searchedObject);
                                }
                                else if(typeCurrent === 'string'){
                                    const num = stringToNumber(currentValue);
                                    searchedObject[key] = num;
                                    outputData.push(searchedObject);
                                }
                            }
                        }
                        if(shemaValue === 'int'){
                        
                            if((!!stringToNumber(currentValue))){
    
                                if(isInt(currentValue)){
                                    searchedObject[key] = currentValue;
                                    outputData.push(currentValue);
                                }
                                else if(isFloat(currentValue)){
                                    const convertedInt = floatToInt(stringToNumber(currentValue));
                                    searchedObject[key] = convertedInt;
                                    outputData.push(searchedObject);
                                }
                                else if(typeCurrent === 'string'){
                                    const num = stringToNumber(currentValue);
                                    searchedObject[key] = num;
                                    outputData.push(searchedObject);
                                }
                            }
                        }
                    }
                    else if(!transform){

                        if(shemaValue === 'float' && isFloat(currentValue)){
                            searchedObject[key] = currentValue;
                            outputData.push(searchedObject);
                        }
                        else if(shemaValue === 'int' && isInt(currentValue)){
                            searchedObject[key] = currentValue;
                            outputData.push(searchedObject);
                        }
                        else if(shemaValue === typeCurrent){
                            searchedObject[key] = currentValue;
                            outputData.push(searchedObject);
                        }
                    }                    
                    }
            }

        }

        if(typeof shema === 'string'){

            for(let key in arr[i]){

                const currentValue = currentItem[key];
                if(transform){

                    if(shema === 'string'){

                            if(typeof currentValue === 'string'){
                                outputData.push(currentValue);
                            }
                            if(typeof currentValue === 'number'){
                                const convertedNumToString = String(currentValue);
                                outputData.push(convertedNumToString);
                            }
                    }

                    if(shema === 'number' || shema === 'float'){

                        if((!!stringToNumber(currentValue))){

                            if(typeof currentValue === 'number'){
                                outputData.push(currentValue);
                            }
                            else if(typeof currentValue === 'string'){
                                const num = stringToNumber(currentValue);
                                outputData.push(num);
                            }
                        }
                    }

                    if(shema === 'int'){
                        
                        if((!!stringToNumber(currentValue))){

                            if(isInt(currentValue)){
                                outputData.push(currentValue);
                            }
                            else if(isFloat(currentValue)){
                                const convertedInt = floatToInt(stringToNumber(currentValue));
                                outputData.push(convertedInt);
                            }
                            else if(typeof currentValue === 'string'){
                                const num = stringToNumber(currentValue);
                                outputData.push(num);
                            }
                        }
                    }
                }
                else if(!transform){
                    
                    if(shema === 'float' && isFloat(currentValue)){
                        outputData.push(currentValue);
                    }
                    else if(shema === 'int' && isInt(currentValue)){
                        outputData.push(currentValue);
                    }
                    else if(shema === typeof currentValue){
                        outputData.push(currentValue);
                    }
                }                    
            }
        }
    }

return outputData;
}
