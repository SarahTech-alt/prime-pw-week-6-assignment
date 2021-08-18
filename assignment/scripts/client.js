$( document ).ready(ready);
let garage = [];

/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/


function newCar($("#yearInput"), makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: $("#yearInput"),
    make: makeInput,
    model: modelInput
  };
  garage.push(newCarObject);
  return true;
} // end newCar

function ready(){
  console.log('JQ');
  $("#addButton").on('click', assign );
}

function assign(){
  console.log('Hello');
  let yearInput = $( "#yearInput").val;
  let makeInput = $("#makeInput").val;
  let modelInput = $("#modelInput").val;
  newCar();
  return;
}
