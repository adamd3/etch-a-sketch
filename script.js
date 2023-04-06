const DEFAULT_SIZE = 16;

const gridContainer = document.querySelector('#grid');
const clearBtn = document.querySelector('#clear');
const resetBtn = document.querySelector('#reset');
const changeBtn = document.querySelector('#change');

let gridSize = DEFAULT_SIZE;


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


function sizePrompt() {
  let size = prompt('Enter new grid size (1-100):');
  if (size === null) {
    return;
  }
  else if (size === '' || isNaN(size) || size < 1 || size > 100) {
    alert('Invalid input! Please enter a number between 1 and 100.');
    sizePrompt();
  } else {
    gridSize = parseInt(size);
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
    createGrid(gridSize);
  }
}

createGrid(gridSize);

clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = 'white');
});


resetBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.remove());
  let gridSize = DEFAULT_SIZE;
  createGrid(gridSize);
});

changeBtn.addEventListener('click', () => {
  sizePrompt()
});
