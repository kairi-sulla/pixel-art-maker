// Select color input
let gridColor = document.getElementById("colorPicker");

// Select size input
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");

// Table
let grid = document.getElementById("pixelCanvas");

// Form
let form = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", function (event){
  event.preventDefault();
  makeGrid(gridHeight, gridWidth);

});

// Function makeGrid()
function makeGrid(height, width){
  grid.innerHTML='';
  grid.style.border = "1px solid black";

  for (var i=0; i<height.value; i++){
    let row = grid.insertRow(i);
    for (let x=0; x<width.value; x++){
      let cell = row.insertCell(x);
    };
  };
};

gridColor.addEventListener()
