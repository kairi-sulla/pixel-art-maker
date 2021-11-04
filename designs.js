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
  // Prevents the default event from happening
  event.preventDefault();
  // Calls the makeGrid function
  makeGrid(gridHeight, gridWidth);

});

// Function makeGrid()
function makeGrid(height, width){
  // deletes the previous table
  grid.innerHTML='';
  // Defines the style of the table
  grid.style.border = "1px solid black";
  // Runs the for loop for making the grid with height and width values from form
  for (var i=0; i<height.value; i++){
    let row = grid.insertRow(i);
    for (let x=0; x<width.value; x++){
      let cell = row.insertCell(x);
    };
  };
};

// Adds an eventlistener for a click in the grid
grid.addEventListener("click", function (click){
  // targets the cell that was clicked and colors it the value chosen in the colorPicker
  if (click.target.nodeName === 'TD') {
    click.target.style.backgroundColor = gridColor.value;
  }
});
