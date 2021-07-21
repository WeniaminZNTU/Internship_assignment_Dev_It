'use strict';
import {testData} from './input data.js';

console.log('Task 7:');
console.log('array_find(testData, \'/^raf.*/i\')):', array_find(testData, '/^raf.*/i'));
console.log('array_find(testData, \'Rafshan\')):', array_find(testData, 'Rafshan'));


function array_find(arr, searchWords){
    if(!searchWords){
        return null;
    }

    const match = [];
    if(searchWords[0] === '/'){
        const flags = searchWords.substring((searchWords.lastIndexOf('/') + 1));
        searchWords = searchWords.slice(1, searchWords.lastIndexOf('/'));
        searchWords = RegExp(searchWords, flags);
    }
    
    arr = arr.join(' ');
    arr = arr.split(' ');

    for(let i = 0; i < arr.length; i++){
            if(arr[i].match(searchWords)){
                match.push(arr[i]);
            }
    }

return (match.length > 0) ? match : null;
}

