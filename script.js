const gridContainer = document.querySelector('#grid');
const clearBtn = document.querySelector('#clear');
const resetBtn = document.querySelector('#reset');
const changeBtn = document.querySelector('#change');

let gridSize = 16;

function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
    gridContainer.appendChild(square);
  }
}

createGrid(gridSize);
