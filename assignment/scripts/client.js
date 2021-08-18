$( document ).ready(ready);
let garage = [];

/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/


function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  };
  garage.push(newCarObject);
  let garageOutput = $( "#garageList" );
  garageOutput.append(`<li> ${yearInput} ${makeInput} ${modelInput} </li>`);
  return true;
} // end newCar

function ready(){
  $("#addButton").on('click', assign );
}
function assign(){
  let yearInput = $("#yearInput").val();
  let makeInput = $("#makeInput").val();
  let modelInput = $("#modelInput").val();
  newCar(yearInput,makeInput,modelInput);
}
