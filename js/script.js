'use strict';

const form = document.querySelector('form');
const price = document.querySelector('#price');
const tip = document.querySelector('#tip');
const resultPlaceBill = document.querySelector('.result-bill');
const resultPlaceTip = document.querySelector('.result-tip');
const resultText = document.querySelector('.result-box');
const errorPlacePrice = document.querySelector('.error-price')
const errorPlaceTip = document.querySelector('.error-tip')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const delayResult = setTimeout(delaySum, 400)
    function delaySum() {

        if(price.value == '') {
            errorPlacePrice.style.display = "block";
            resultPlaceBill.style.display = 'none'
        } if(tip.value == '') {
            errorPlaceTip.style.display = "block";
            resultPlaceTip.style.display = 'none'
        } if(price.vaule != '' && tip.value != ''){
            resultText.style.display = 'block'
        }

        const countTip = parseFloat(price.value) * (parseInt(tip.value) / 100);
        resultPlaceTip.textContent = countTip.toFixed(2);
        resultPlaceTip.style.color = 'black'
    
        const countBill = parseFloat(price.value) + countTip;
        resultPlaceBill.textContent = countBill.toFixed(2);
        resultPlaceBill.style.color = 'black'
    } 

});




