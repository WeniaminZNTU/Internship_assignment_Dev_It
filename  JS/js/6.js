'use strict';

let a = function(one, two) {
    return one + two
  }
  let b = function() {
    return false;
  }

  function paralell(arr, callback){
    const callbackParametr = [];

    setTimeout(()=>{
      const computation = arr[0][0](arr[0][1][0],arr[0][1][1]);
      const bFunctionResult = arr[1][0]();
  
        callbackParametr.push(computation);
        callbackParametr.push(bFunctionResult);

        callback(callbackParametr);

    },0);
  }

  console.log('Task 6:(Result in the last log)');
  
  paralell([[a, [1, 2]], [b]], function(results) {
    console.log(results); // [3, false]
});
