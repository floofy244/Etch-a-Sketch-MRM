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
function rgbColor(){
    const boxes = container.querySelectorAll('.box');
    btnRgb.textContent = 'RGB';
    btnRgb.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255);
            let Gnum = Math.floor(Math.random() * 255);
            let Bnum = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${Rnum}, ${Gnum}, ${Bnum})`;
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn');
}

function resetGrid() {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}

function resizeGrid() {
    btnSize.textContent = 'Resize';
    btnSize.addEventListener('click', () => {
        const size = prompt('Enter size of grid:');
        if(size === null || size < 1) {
            resetGrid();
            createGrid(16, 16);
            blackColor();
            grayColor();
            rgbColor();
        } else {
            resetGrid();
            createGrid(size, size);
            blackColor();
            grayColor();
            rgbColor();
        }
        
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}
resizeGrid();
grayColor();
blackColor();
rgbColor();
    