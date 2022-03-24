'use strict';

const form = document.querySelector('form');
const price = document.querySelector('#price');
const tip = document.querySelector('#tip');
const resultPlaceTip = document.querySelector('.result-tip');
const resultPlaceBill = document.querySelector('.result-bill');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const countTip = parseFloat(price.value) * (parseInt(tip.value) / 100);
    
    resultPlaceTip.textContent = countTip.toFixed(2);

    const countBill = parseFloat(price.value) + countTip;
    resultPlaceBill.textContent = countBill.toFixed(2);

   

});