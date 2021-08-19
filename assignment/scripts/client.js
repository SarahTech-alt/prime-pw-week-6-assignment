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
  // let garageOutput = $( "#garageList" );
  // garageOutput.append(`<li> ${yearInput} ${makeInput} ${modelInput} </li>`);
  return true;
} // end newCar


function ready(){
  $("#addButton").on('click', addCar() );
}

function addCar(){
  newCar($("#carYear").val(), $("#carMake").val(), $("#carModel").val());
}

// function assign(){
//   // placing user input into variables to work with
//   let yearInput = $("#yearInput").val();
//   let makeInput = $("#makeInput").val();
//   let modelInput = $("#modelInput").val();
//   // running the newCar function to add items to garage
//   newCar(yearInput,makeInput,modelInput);
//   // add car input to DOM
//   $("#garageList").append(`<li> ${yearInput} ${makeInput} ${modelInput}`).css('background-color','#cac7a8').css('color','#0f020b');
//   // clear input values
//   $("#yearInput").val('');
//   $("#makeInput").val('');
//   $('#modelInput').val('');
// }

// if (newCar()){
//   //for (let cars in garage){
//     console.log(garage);
//     //$("#garageList").append(`<li> ${cars.yearInput}`))
//   //}
// }
