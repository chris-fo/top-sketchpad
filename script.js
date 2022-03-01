const container = document.querySelector('#container');
// let rowsAndColumns = 16;
let opacity = 0.1;

function createGrid(rowsAndColumns) {
  for (let row = 0; row < rowsAndColumns; row++) {
    // const rowDiv = document.createElement('div');
    // rowDiv.classList.add('row-div');
    // rowDiv.id = `row-${row+1}`;
    for (let column = 0; column < rowsAndColumns; column++) {
      const div = document.createElement('div');
      div.classList.add('grid-div');
      div.id = `div-${row+1}-${column+1}`;
      container.appendChild(div);
      // rowDiv.appendChild(div);
    }
    // container.appendChild(rowDiv);
  }
  addHoverEffect();
}

function addHoverEffect() {
  const gridDivs = document.querySelectorAll('.grid-div');
  gridDivs.forEach( div => {
    div.addEventListener('mouseenter', e => {
      e.target.classList.add('hovered');
      // random background color
      // let red = Math.floor((Math.random()*255)+1);
      // let green = Math.floor((Math.random()*255)+1);
      // let blue = Math.floor((Math.random()*255)+1);
      // e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      
      // make background darker each time
      // e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      // if (opacity < 1) {
      //   opacity += 0.1;
      // }
    })
  })
}


function initialSetup() {
  // set up a 16x16 grid
  createGrid(16);
}

// gridDivs.forEach( div => {
//   div.addEventListener('mouseleave', e => {
//     e.target.classList.remove('hovered');
//   })
// })

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function newGrid() {
  removeAllChildNodes(container);
  let rowsAndColumns = parseInt(prompt('How many squares per side? (Max. 100, Default 16)'));
  if (rowsAndColumns === NaN || rowsAndColumns === 0) {
    rowsAndColumns = 16;
  } else if (rowsAndColumns > 100) {
    rowsAndColumns = 100;
  }
  createGrid(rowsAndColumns);
  const root = document.documentElement;
  root.style.setProperty('--grid-size', rowsAndColumns);
  // opacity = 0.1;
}

initialSetup();