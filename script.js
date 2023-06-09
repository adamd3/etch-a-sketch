const DEFAULT_SIZE = 32;

const gridContainer = document.getElementById('grid');
const clearBtn = document.getElementById('clear');
const blackButton = document.getElementById('black');
const rainbowButton = document.getElementById('rainbow');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

let gridSize = DEFAULT_SIZE;
let penActive = false;
let blackMode = true;
let rainbowMode = false;

sliderValue.textContent = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`;
createGrid(gridSize);

clearBtn.addEventListener('click', clearGrid);
slider.addEventListener('change', updateGrid);

blackButton.addEventListener("click", () => {
  blackMode = true;
  rainbowMode = false;
});

rainbowButton.addEventListener("click", () => {
  blackMode = false;
  rainbowMode = true;
});

grid.addEventListener('click', () => {
  if (penActive) {
    penActive = false;
  } else {
    penActive = true;
  }
});

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
      if (penActive) {
        if (!rainbowMode) {
          square.style.backgroundColor = "#000000";
        } else {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
      }
    });
    gridContainer.appendChild(square);
  }
}


function updateGrid() {
  nCells = (slider.value).match(/\d+/);
  const numSquares = parseInt(nCells);
  sliderValue.textContent = `${numSquares} x ${numSquares}`;
  createGrid(numSquares);
}

function clearGrid () {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.removeAttribute('style'));
}
