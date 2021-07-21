'use strict';

const complexObject = {
    name:'test',
    adress:{
        city:{
            populution: 3500000,
            size:'334км',
        },
        street:{
            name:'Pavlograd\'ska',
            houseNumber:21,
        }
    }
}

console.log('Task 1:');
console.log('obj:', complexObject);
console.log('clone obj:', cloneDeep(complexObject));

function cloneDeep(obj){
    if((!obj)){
        return null;
    }

    const clone = {};

    const properties = Object.entries(obj);
    
    for(let i = 0; i < properties.length; i++){

        if(properties[i][1] instanceof Object){
            clone[properties[i][0]] = cloneDeep(properties[i][1]);
        }
        else{
            clone[properties[i][0]] = properties[i][1];
        }
    }

return clone;
}
