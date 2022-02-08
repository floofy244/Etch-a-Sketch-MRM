const container = document.querySelector('.container');
const btnGray = document.createElement('button');
const btnRgb = document.createElement('button');
const btnSize= document.createElement('button');
const btnBlack = document.createElement('button');
const buttonsContainer = document.querySelector('.btns');


function createGrid(col, rows) {
    for(let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid red'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createGrid(16, 16);

function grayColor(){
    const boxes = container.querySelectorAll('.box');
    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn');
}
function blackColor(){
    const boxes = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}

grayColor();
blackColor();
    