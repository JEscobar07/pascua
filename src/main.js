import "../src/style.css"

const eggContainer = document.getElementById('eggContainer');
const findEggsButton = document.getElementById('findEggsButton');

function createEgg() {
    const egg = document.createElement('div');
    egg.className = 'egg';
    egg.style.left = Math.random() * (eggContainer.offsetWidth - 50) + 'px';
    egg.style.top = Math.random() * (eggContainer.offsetHeight - 70) + 'px';
    eggContainer.appendChild(egg);

    setTimeout(() => {
        egg.remove();
    }, 5000);
}

function scatterEggs() {
    for (let i = 0; i < 10; i++) {
        setTimeout(createEgg, i * 300);
    }
}

findEggsButton.addEventListener('click', scatterEggs);
