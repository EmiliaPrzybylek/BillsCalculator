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
    resultPlaceTip.textContent = countTip.toFixed(1);
    resultPlaceBill.textContent = countBill.toFixed(2);

        if (price.value != '' && tip.value == '') {
            errorPlaceTip.style.display = "block";
            errorPlacePrice.style.display = "none";
            resultText.style.display = 'none';
        }
        if(price.value == '' && tip.value != '') {
            errorPlaceTip.style.display = "none";
            errorPlacePrice.style.display = "block";
            resultText.style.display = 'none';
        }
        if(price.value == '' && tip.value == '') {
            errorPlacePrice.style.display = 'block';
            errorPlaceTip.style.display = 'block';
            resultText.style.display = 'none';
        }
        if(price.value != '' && tip.value != '') {
            errorPlacePrice.style.display = 'none';
            errorPlaceTip.style.display = 'none';
            resultText.style.display = 'block';
        }

    }
 
});

resetCalc.addEventListener('click', () => {
    resultText.style.display = 'none';
    errorPlacePrice.style.display = "none";
    errorPlaceTip.style.display = "none";
})


    





