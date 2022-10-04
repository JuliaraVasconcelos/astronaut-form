const range = document.querySelector('#rangevalor');
const caixa = document.querySelector('#caixa');
caixa.textContent= range.value;
range.oninput = function(){
    caixa.textContent = this.value;
}