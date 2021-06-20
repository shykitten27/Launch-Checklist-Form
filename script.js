// Write your JavaScript code here!
window.addEventListener("load", function() {
   //fetch randomly here - BONUS to use math.random for index
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      // Access the JSON in the response
      response.json().then( function(json) {
         //test this----
         function selectRandomDestination(arr){
            let index = Math.floor(Math.random()*json.length);
            return index;
          } 
          
          let index = selectRandomDestination(json);
          console.log(index);
         //-------
        const div = document.getElementById("missionTarget");
        div.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${json[index].name}</li>
           <li>Diameter: ${json[index].diameter}</li>
           <li>Star: ${json[index].star}</li>
           <li>Distance from Earth: ${json[index].distance}</li>
           <li>Number of Moons: ${json[index].moons}</li>
        </ol>
        <img src="${json[index].image}"></img>
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
      let cargoStatus = document.getElementById("cargoStatus"); 
      let faultyItems = document.getElementById("faultyItems");     

      console.log(pilotNameInput.value);
      console.log(copilotNameInput.value);
      console.log(fuelLevelInput.value);
      console.log(cargoMassInput.value);

      if (pilotNameInput.value   === "" || 
          copilotNameInput.value === "" ||
          fuelLevelInput.value   === "" ||
          cargoMassInput.value   === "") {
          alert("All fields are required!");

         //true if the given value is NOT NaN 
      }else if (!isNaN(pilotNameInput.value) || 
                !isNaN(copilotNameInput.value) ) {
                alert("Pilot and Co-Pilot names must not be numeric!"); 

         //true if the given value is NaN
      }else if (isNaN(fuelLevelInput.value) || 
                isNaN(cargoMassInput.value) ) {
                alert("Fuel level and cargo mass must be numeric!");

      }else if (fuelLevelInput.value < 10000) {
                fuelStatus.innerHTML = "Not enough fuel for the journey";
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = 'red';
                faultyItems.style.visibility="visible";  

      }else if (cargoMassInput.value > 10000) {
                cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = 'red';
                faultyItems.style.visibility="visible"; 
      }else{
      //combine if statements and when all true...
               launchStatus.innerHTML = "Shuttle is ready for launch."
               launchStatus.style.color = 'green';
               faultyItems.style.visibility="visible"; 
               //adding this in case user corrects errors and status messages need to be reset
               fuelStatus.innerHTML = "Fuel level high enough for launch";
               cargoStatus.innerHTML = "Cargo mass low enough for launch";
      }
   });
});