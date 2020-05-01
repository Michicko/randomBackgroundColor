const changeBtn = document.querySelector('#change');

changeBtn.addEventListener('click', changeColor);

function changeColor() {
    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();
    let col = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = col;
    document.querySelector('#color').innerHTML = col;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 255)
}

