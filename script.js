// Write your JavaScript code here!
window.addEventListener("load", function() {
   //move json fetch
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      //setup variables for faultyItems 
      //let element = document.getElementById("element-id");
      if (pilotNameInput.value   === "" || 
          copilotNameInput.value === "" ||
          fuelLevelInput.value   === "" ||
          cargoMassInput.value   === "") {
         alert("All fields are required!");
      } 
//combine if statement and when all true, 
//let faultyItems = document.getElementById("faultyItems");
//faultyItems.style.visibility="visible";        
      //true if the given value is NOT NaN 
      if (!isNaN(pilotNameInput.value) || 
          !isNan(copilotNameInput.value) ) {
         alert("Pilot and Co-Pilot names must not be numeric!");
      } else{

      }
      //true if the given value is NaN
      if (isNaN(fuelLevelInput.value) || 
          isNan(cargoMassInput.value) ) {
         alert("Fuel level and cargo mass must be numeric!");
      }

   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
//move to top so it loads once
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
