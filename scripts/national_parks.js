"use strict"

window.onload = () => {

    initParkselect();

    //Grabbing the dropdowns individually from the html page
    let selectByLocation = document.querySelector("#selectPark");

    let selectByType = document.querySelector("#selectType");

    //once a option on the drop down is chosen the information will get displayed
    selectByLocation.addEventListener("change", getInfoOffList)

}
function getInfoOffList(event) {

    //get the selected information from the dropdown which is also the event.target
    let selectedState = event.target.value;

    //Here we are looping through the national park array an filtering through to get the information we need in order to match
    let matchingActivities = nationalParksArray.filter((park) => {

        //returning the every single option that it goes through and choosing the 
        //state and if it mathes the value in the selectedState then it returns it.
        return park.State === selectedState;



    })
    //getting a hold of the table body so we can add rows to it for all the matching state info
    let tableBody = document.querySelector("#infoTableBody");
    //set the innterHTML to "" which clear it out
    tableBody.innerHTML = "";

    matchingActivities.forEach((park) => {

        //running the function with the table that we grabbed from the HTML 
        //now the "park" is going throught the list individually
        buildTableRow(tableBody, park);


    })

    //function we are running to add the information from the nationalParkArray to the table
    //tablebody is the html table we grabbed earlier
    //data is a parameter that we run what we choose in it
    function buildTableRow(tableBody, data) {

        //create the row to hold the data
        let newRow = tableBody.insertRow(-1);

        let cell1 = newRow.insertCell(0);
        //this is us displaying the text on the page that is collected from the data in JS
        cell1.innerHTML = data.LocationID

        let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.LocationName

        let cell3 = newRow.insertCell(2);
        cell3.innerHTML = `${data.Address}, ${data.City}, ${data.State}, ${data.ZipCode}`

        let cell4 = newRow.insertCell(3)
        cell4.innerHTML = `Phone: ${data.Phone}, Fax: ${data.Fax}`

        let cell5 = newRow.insertCell(4)
        if (typeof data.Visit === "undefined"){
            cell5.innerHTML = "N/A"
        }else{
            cell5.innerHTML = data.Visit;
        }
    }

}
//created a function for the first drop down, to input the states we choose from
function initParkselect() {

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
