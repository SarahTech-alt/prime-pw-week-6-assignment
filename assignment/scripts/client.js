$(document).ready(ready);
let garage = [];
const maxCars = 10;

/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/

// once page is finished loading and the button is clicked execute addCar function
function ready() {
  $("#addButton").on('click', assign);
}

function newCar(yearInput, makeInput, modelInput) {
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  };
  garage.push(newCarObject);
  // let garageOutput = $( "#garageList" );
  // garageOutput.append(`<li> ${yearInput} ${makeInput} ${modelInput} </li>`);
  return true;
} // end newCar

function clearValues() {
  $("#yearInput").val('');
  $("#makeInput").val('');
  $('#modelInput').val('');
  $('#imgURLInput').val('');
} // resets the input fields to empty

//$("input").prop('required',true);
// Alternate approach to the problem would call assign on the button click instead of addCar
function assign() {
  // placing user input into variables to work with to increase readability
  let yearInput = $("#yearInput").val();
  let makeInput = $("#makeInput").val();
  let modelInput = $("#modelInput").val();
  let imgURLInput = $("#imgURLInput").val();
  let imageDOMStyle = `<img src = ${imgURLInput} alt= "Car Image" /> `
  if ($("#yearInput").val() === "" || $("#makeInput").val() === "" || $("#modelInput").val() === "") {
    window.alert("Must enter all fields!"); // alerts the user if any of the inputs are empty
    clearValues(); // if a field is empty call the clear values function to restart
    return;
  }
  if (garage.length >= maxCars) {
    window.alert("There is no more room in the garage!"); // alerts the user if the garage is at capacity
    clearValues(); // if a field is empty call the clear values function to restart
  }

  else { // if all inputs are found run the newCar function with user inputs as parameters
    newCar(yearInput, makeInput, modelInput);
    $("#garageList").append(`<li> ${yearInput} ${makeInput} ${modelInput} </li> `).css('background-color', '#cac7a8').css('color', '#0f020b'); // adding car information as an unordered list to the DOM
    $("#garageContents").append(`${imageDOMStyle}`); // add image to the DOM
    clearValues(); // clears input values
    console.log(garage); // checking garage contents
  } return;
}
