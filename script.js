// Write your JavaScript code here!
window.addEventListener("load", function() {
   //fetch randomly here - BONUS to use math.random for index
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      // Access the JSON in the response
      response.json().then( function(json) {
        const div = document.getElementById('missionTarget');
        div.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${json[2].name}</li>
           <li>Diameter: ${json[2].diameter}</li>
           <li>Star: ${json[2].star}</li>
           <li>Distance from Earth: ${json[2].distance}</li>
           <li>Number of Moons: ${json[2].moons}</li>
        </ol>
        <img src="${json[2].image}"></img>
        `;
      });
  });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      //setup variables for faultyItems 
      //ex: let element = document.getElementById("element-id");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let pilotStatus = document.getElementById("cargoStatus");      
 
      if (pilotNameInput.value   === "" || 
          copilotNameInput.value === "" ||
          fuelLevelInput.value   === "" ||
          cargoMassInput.value   === "") {
          alert("All fields are required!");

         //true if the given value is NOT NaN 
      }else if (!isNaN(pilotNameInput.value) || 
                !isNan(copilotNameInput.value) ) {
                alert("Pilot and Co-Pilot names must not be numeric!"); 

         //true if the given value is NaN
      }else if (isNaN(fuelLevelInput.value) || 
                isNan(cargoMassInput.value) ) {
                alert("Fuel level and cargo mass must be numeric!");

      }else if (fuelLevelInput.value < 10000) {
                fuelLevelInput = "Not enough fuel for the journey.";
                launchStatus = "Shuttle not ready for launch";
                document.getElementById("launchStatus").style.color = 'red';

      }else if (cargoMassInput.value > 10000) {
                cargoMassInput = "Too much mass for the shuttle to take off.";
                launchStatus = "Shuttle not ready for launch";
                document.getElementById("launchStatus").style.color = 'red';
      }else{
      //combine if statements and when all true...
               launchStatus = "Shuttle is ready for launch";
               document.getElementById("launchStatus").style.color = 'green';
               let faultyItems = document.getElementById("faultyItems");
               faultyItems.style.visibility="visible"; 
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