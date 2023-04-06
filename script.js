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

clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = 'white');
});

resetBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.remove());
  createGrid(gridSize);
});

changeBtn.addEventListener('click', () => {
  let size = prompt('Enter new grid size (1-100):');
  if (size === null || size === '' || isNaN(size) || size < 1 || size > 100) {
    alert('Invalid input! Please enter a number between 1 and 100.');
  } else {
    gridSize = parseInt(size);
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
    createGrid(gridSize);
  }
});
