const DEFAULT_SIZE = 16;

const gridContainer = document.getElementById('grid');
const clearBtn = document.getElementById('clear');
const resetBtn = document.getElementById('reset');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

let gridSize = DEFAULT_SIZE;
let isDrawing = null;


createGrid(gridSize);

clearBtn.addEventListener('click', clearGrid);
slider.addEventListener('change', updateGrid);
resetBtn.addEventListener('click', resetGrid);


function createGrid(size) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
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

function clearGrid () {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.removeAttribute('style'));
}

function resetGrid()  {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.remove());
  let gridSize = DEFAULT_SIZE;
  slider.value = DEFAULT_SIZE;
  sliderValue.textContent = DEFAULT_SIZE;
  createGrid(gridSize);
}


