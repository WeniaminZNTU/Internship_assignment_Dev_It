'use strict'

const button = document.getElementById('btn');

button.addEventListener('click', (event)=>{
    if(button.classList.contains('danger')){
        button.classList.remove('danger');
    }
    else{
        button.classList.add('danger');
    }
});
