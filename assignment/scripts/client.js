$( document ).ready(ready);
let garage = [];

/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/

// once page is finished loading and the button is clicked execute addCar function
function ready(){
  $("#addButton").on('click', assign );
}

function newCar(yearInput, makeInput, modelInput){
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



// executes newCar function with user inputs as parameters
// function addCar(){
//   // alerts user if field is left blank
//   if ($("#yearInput").val() === "" || $("#makeInput").val() === "" || $("#modelInput").val() === ""){
//     window.alert("Must enter all fields!"); // alerts the user if any of the inputs are empty
//     clearValues(); // if a field is empty call the clear values function to restart
//   } else { // if all inputs are found run the newCar function with user inputs as parameters
//   newCar($("#yearInput").val(), $("#makeInput").val(), $("#modelInput").val());
//   // adds the inputted value to the DOM
//   $("#garageList").append(`<li> ${$("#yearInput").val()} ${$("#makeInput").val()} ${$("#modelInput").val()} </li>`).css('background-color', 'tan');
//   clearValues(); // calls the clear values function after writing to the
//   }
// }

function clearValues(){
  $("#yearInput").val('');
  $("#makeInput").val('');
  $('#modelInput').val('');
}

//$("input").prop('required',true);
// Alternate approach to the problem would call assign on the button click instead of addCar
function assign(){
  // placing user input into variables to work with
  let yearInput = $("#yearInput").val();
  let makeInput = $("#makeInput").val();
  let modelInput = $("#modelInput").val();
    if ($("#yearInput").val() === "" || $("#makeInput").val() === "" || $("#modelInput").val() === ""){
      window.alert("Must enter all fields!"); // alerts the user if any of the inputs are empty
      clearValues(); // if a field is empty call the clear values function to restart
    } else { // if all inputs are found run the newCar function with user inputs as parameters
      newCar(yearInput,makeInput,modelInput);
      // add car input to DOM
      $("#garageList").append(`<li> ${yearInput} ${makeInput} ${modelInput}`).css('background-color','#cac7a8').css('color','#0f020b');
      // // clear input values
      clearValues();
      console.log(garage);
    }
  }

// if (newCar()){
//   //for (let cars in garage){
//     console.log(garage);
//     //$("#garageList").append(`<li> ${cars.yearInput}`))
//   //}
// }
