'use strict';

const form = document.querySelector('form');
const price = document.querySelector('#price');
const tip = document.querySelector('#tip');
const resultPlaceBill = document.querySelector('.result-bill');
const resultPlaceTip = document.querySelector('.result-tip');
const resultText = document.querySelector('.result-box');
const errorPlacePrice = document.querySelector('.error-price');
const errorPlaceTip = document.querySelector('.error-tip');
const resetCalc = document.querySelector('.reset');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const delayResult = setTimeout(delaySum, 300);
    function delaySum() {

    const countTip = parseFloat(price.value) * (parseInt(tip.value) / 100);
    const countBill = parseFloat(price.value) + countTip;
   
    resultPlaceTip.textContent = `${countTip.toFixed(2)} zł`;
    resultPlaceBill.textContent = `${countBill.toFixed(2)} zł`;


        if (price.value != '' && tip.value == '') {
            errorPlaceTip.style.visibility = 'visible'
            errorPlacePrice.style.visibility = 'hidden';
            resultText.style.visibility = 'hidden';
        }
        if(price.value == '' && tip.value != '') {
            errorPlaceTip.style.visibility = "hidden";
            errorPlacePrice.style.visibility = 'visible'
            resultText.style.visibility = 'hidden';
        }
        if(price.value == '' && tip.value == '') {
            errorPlacePrice.style.visibility = 'visible'
            errorPlaceTip.style.visibility = 'visible';
            resultText.style.visibility = 'hidden';
        }
        if(price.value != '' && tip.value != '') {
            errorPlacePrice.style.visibility = "hidden";
            errorPlaceTip.style.visibility = "hidden";
            resultText.style.visibility = 'visible';
        }

    }
 
});

resetCalc.addEventListener('click', () => {
    resultText.style.visibility = 'hidden';
    errorPlacePrice.style.visibility = "hidden";
    errorPlaceTip.style.visibility = "hidden";
})


    





