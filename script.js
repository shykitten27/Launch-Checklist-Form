// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
      if (pilotNameInput.value   === "" || 
          copilotNameInput.value === "" ||
          fuelLevelInput.value   === "" ||
          cargoMassInput.value   === "") {
         alert("All fields are required!");
      } 
      console.log(pilotNameInput.value);
      console.log(copilotNameInput.value);   
      console.log(fuelLevelInput.value);
      console.log(cargoMassInput.value);         
      //true if the given value is NOT NaN 
      if (!isNaN(pilotNameInput.value) || 
          !isNan(copilotNameInput.value) ) {
         alert("Pilot and Co-Pilot names must not be numeric!");
      } 
      //true if the given value is NaN
      if (isNaN(fuelLevelInput.value) || 
          isNan(cargoMassInput.value) ) {
         alert("Fuel level and cargo mass must be numeric!");
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
