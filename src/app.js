const buttomPlayCoin = document.getElementById('container__coin-image__btn');
const coins = document.getElementsByClassName('container__coin-image');
const coin = coins[0];
const possibleResults = ['Heads', 'Tails'];

buttomPlayCoin.addEventListener("click", () => {
    const radomIndex = Math.floor(Math.random() * possibleResults.length);
    const radomResult = possibleResults[radomIndex];
    coin.classList.add('spinning');
    setTimeout(() => {
        alert(radomResult);
    }, 1000);
});