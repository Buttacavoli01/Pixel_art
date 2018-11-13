
var cells = document.getElementsByClassName('cells');

function createGrid() {
  let table = document.getElementById('pixelCanvas');
  table.innerHTML = ''
  let rows = document.getElementById('input_height').value;
  let cols = document.getElementById('input_width').value;


  for (var i = 1; i <= rows; i++) {
    let row = table.appendChild(document.createElement("tr"));

    for (var j = 1; j <= cols; j++) {
      row.append(document.createElement('td'))
    }
  }
}

//form sumbit event handler
document.getElementById('gridSize').addEventListener('submit', (e) => {
  //preventing form from resetting
  e.preventDefault();
  createGrid();

  document.getElementsByTagName('td').addEventListener('click', function(e) {
    let paint = document.getElementById('colorPicker').value
    e.preventDefault();
    e.target.style = `background-color: ${paint}`;
    });
});
