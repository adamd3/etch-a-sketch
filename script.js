const DEFAULT_SIZE = 16;

const gridContainer = document.getElementById('grid');
const clearBtn = document.getElementById('clear');
const resetBtn = document.getElementById('reset');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

let gridSize = DEFAULT_SIZE;
let isDrawing = null;

function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
      if (isDrawing) {
        square.style.backgroundColor = 'black';
      }
    });
    square.addEventListener('mousedown', () => {
      isDrawing = true;
      square.style.backgroundColor = 'black';
    });
    square.addEventListener('mouseup', () => {
      isDrawing = false;
    });
    gridContainer.appendChild(square);
  }
}


function updateGrid() {
  const numSquares = parseInt(slider.value);
  sliderValue.textContent = numSquares;
  createGrid(numSquares);
}

createGrid(gridSize);

clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  // squares.forEach(square => square.style.backgroundColor = 'white');
  squares.forEach(square => square.removeAttribute('style'));
});


resetBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.remove());
  let gridSize = DEFAULT_SIZE;
  createGrid(gridSize);
});


slider.addEventListener('change', updateGrid);
