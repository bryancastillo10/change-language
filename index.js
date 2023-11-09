// Modularization

import { data as data } from '/var.js'


// Translation Functionality
const langSec = document.querySelector('.languageSection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textdes1 = document.querySelector('.des1');
const textdes2 = document.querySelector('.des2');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');
        
        const attr = button.getAttribute('language');

        textTitle.textContent = data[attr].title;
        textdes1.textContent = data[attr].des1;
        textdes2.textContent = data[attr].des2;

    });
});

