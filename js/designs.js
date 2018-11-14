let color = document.querySelector('#colorPicker')

document.getElementById('gridSize').addEventListener('submit', (e) => {
  e.preventDefault()
  createGrid()
})


function createGrid() {
  let table = document.getElementById('pixelCanvas');
  table.innerHTML = ''
  let rows = document.getElementById('input_height').value;
  let cols = document.getElementById('input_width').value;

  for (var i = 1; i <= rows; i++) {
    let row = table.appendChild(document.createElement("tr"));

    for (var j = 1; j <= cols; j++) {
      let col = row.appendChild(document.createElement('td'))
      col.onclick = changeColor
      col.ondblclick = erase
    }
  }
}

function changeColor() {
  this.style.background = color.value
}

function erase() {
  this.style.background = "#fff"
}
