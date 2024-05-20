"use strict"

window.onload = () => {

    initParkselect();

    //Grabbing the dropdowns individually from the html page
   let selectByLocation = document.querySelector("#selectPark");

   let selectByType = document.querySelector("#selectType");

    selectByLocation.addEventListener("change",getInfoOffList)

}
function getInfoOffList(event) {

    //get the selected category from the dropdown which is also the event.target
    let selectedState = event.target.value;

    let matchingActivities = nationalParksArray.filter((park) => {

        //returning the every single option that it goes through and choosing the 
        //category and if it mathes the value in the selectedCategory then it returns it.
        return park.State === selectedState;



    })
    //getting a hold of the table body so we can add rows to it for all the activities
    let tableBody = document.querySelector("#infoTableBody");
    //set the innterHTML to "" which clear it out
    tableBody.innerHTML = "";

    matchingActivities.forEach((park) => {

        //running the function with the table that we grabbed from the HTML 
        //now the "acitivity" is going throught the list individually
        buildTableRow(tableBody, park);


    })

    function buildTableRow(tableBody, data) {

        //create the row to hold the data
        let newRow = tableBody.insertRow(-1);

        //loop over all the properties in the object and create a cell for them 
        //data is the whole thing (the object) and property is grabbing them singularly 
        for (let property in data) {

            //grabbing the strings individually and fitting them in a cell
            let newTD = newRow.insertCell();
            newTD.innerText = data[property];
        }

 }

}
function initParkselect(){

    //we are grabbing the dropdown from the HTML page to work with it
    let selectByLocation = document.querySelector("#selectPark");
    //creating a element for the default option
    let defaultOption = document.createElement("option");

    //this is what we get back in the js when we ask for it
    defaultOption.value = ""

    //this is what the user actually selects in the dropdown
    defaultOption.textContent = "-- Choose Park Location--";

    //add the option we created to the dropdown
    selectByLocation.appendChild(defaultOption);

     //write a loop to work with each individual category and build an option for it
     locationsArray.forEach((state) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = state;

        //set what the user sees 
        newOption.textContent = state;

        selectByLocation.appendChild(newOption);


    })


}

function matchByStateName(nationalParksArray, state) {

    //start by creating an empty list to hold our matches
    let matching = [];
    //number of items on the info list
    let numItems = nationalParksArray.length;

    //loop over the state info to find matches
    for (let i = 0; i < numItems; i++) {
        if (nationalParksArray[i].State === state) {
            //add that state to our matches array
            matching.push(nationalParksArray[i]);
        }
    }

    //return all the matching menu items
    return matching;
}

   /*
        You can remove the following console.log() lines.
        They are here to verify that we have access to the data
        The data script files are located in the scripts/data directory
    */

    //log the locationsArray to the console (scripts/data/locationData.js)
    // console.log(locationsArray)

    //log the parkTypesArray to the console (scripts/data/parkTypeData.js)
    // console.log(parkTypesArray)

    //log the nationalParksArray to the console (scripts/data/nationalParkData.js)
    // console.log(nationalParksArray)
