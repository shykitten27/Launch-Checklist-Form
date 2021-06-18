// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("formSubmit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      // alert the current value found in the pilotName input
      alert("pilotName: " + pilotName.value);

      let copilotNameInput = document.querySelector("input[name=copilotName]");
      // alert the current value found in the copilotName input
      alert("copilotName: " + copilotName.value); 

      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      // alert the current value found in the fuelLevel input
      alert("fuelLevel: " + fuelLevel.value);

      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      // alert the current value found in the cargoMass input
      alert("cargoMass: " + cargoMass.value); 
      
      if (pilotNameInput.value   === "" || 
          copilotNameInput.value === "" ||
          fuelLevelInput.value   === "" ||
          cargoMassInput.value   === "") {
         alert("All fields are required!");
         event.preventDefault();
      } 
      //isNaN equates to is not a number, ergo it is NOT a number when TRUE 
      if (isNaN(pilotNameInput.value) || 
          isNan(copilotNameInput.value) ) {
         alert("Pilot and Co-Pilot names must not be numeric!");
         event.preventDefault();
      } 
      //!isNaN equates to is NOT not a number, ergo it IS a number when TRUE
      if (!isNaN(fuelLevelInput.value) || 
          !isNan(cargoMassInput.value) ) {
         alert("Fuel level and cargo mass must be numeric!");
         event.preventDefault();
      }          
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
