"use strict"

window.onload = () => {

    initParkselect();

    initTypeSelect();

    hideOrShowElement();

    //Grabbing the dropdowns individually from the html page
    let selectByLocation = document.querySelector("#selectPark");

    let selectByType = document.querySelector("#selectType");

    //grabbing our buttons off the html page
    let locationButton = document.querySelector("#location");

    let parkTypeButton = document.querySelector("#type");

    //once a option on the drop down is chosen the information will get displayed
    selectByLocation.addEventListener("change", getInfoOffList);

    selectByType.addEventListener("change", gettypeOffList);



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

        //creating an if statement for the url section as some dont have any and I dont wanna show "undefined"
        let cell5 = newRow.insertCell(4)
        if (!data.Visit) {
            cell5.innerHTML = "N/A"
        } else {
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


//created a function for the first drop down, to input the states we choose from
function initTypeSelect() {

    //we are grabbing the dropdown from the HTML page to work with it
    let selectByType = document.querySelector("#selectType");
    //creating a element for the default option
    let defaultOption = document.createElement("option");

    //this is what we get back in the js when we ask for it
    defaultOption.value = ""

    //this is what the user actually selects in the dropdown
    defaultOption.textContent = "-- Choose A Park Type--";

    //add the option we created to the dropdown
    selectByType.appendChild(defaultOption);

    //write a loop to work with each individual category and build an option for it
    parkTypesArray.forEach((park) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = park;

        //set what the user sees 
        newOption.textContent = park;

        selectByType.appendChild(newOption);


    })
}
function gettypeOffList(event) {

    //get the selected information from the dropdown which is also the event.target
    let selectedType = event.target.value;

    //here we are running a function to match the park types and the national park type
    let matchingTypes = nationalParksArray.filter((type) => {

        //running a loop through the parktypes to get the individual strings
        for (let i = 0; i < parkTypesArray.length; i++) {
            //if the nationalparks locationName has a matching index with the selectedType(The dropdown choices) then return true
            //the negative one is basically saying "not present" but the "!" is saying "not"
            if (type.LocationName.indexOf(selectedType) !== -1) {

                return true
            }
            return false
        };



    });

    //getting a hold of the table body so we can add rows to it for all the matching parktype info
    let tableBody = document.querySelector("#infoTableBody");
    //set the innterHTML to "" which clear it out
    tableBody.innerHTML = "";

    matchingTypes.forEach((type) => {

        //running the function with the table that we grabbed from the HTML 
        //now the "type" is going throught the list individually
        buildTableRow(tableBody, type);

    })
}
//function we are running to add the information from the nationalParkArray to the table
//tablebody is the html table we grabbed earlier
//chosen is a parameter that we run what we choose in it
function buildTableRow(tableBody, chosen) {

    //create the row to hold the data
    let newRow = tableBody.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    //this is us displaying the text on the page that is collected from the data in JS
    cell1.innerHTML = chosen.LocationID

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = chosen.LocationName

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = `${chosen.Address}, ${chosen.City}, ${chosen.State}, ${chosen.ZipCode}`

    let cell4 = newRow.insertCell(3)
    cell4.innerHTML = `Phone: ${chosen.Phone}, Fax: ${chosen.Fax}`

    //creating an if statement for the url section as some dont have any and I dont wanna show "undefined"
    let cell5 = newRow.insertCell(4)
    if (!chosen.Visit) {
        cell5.innerHTML = "N/A"
    } else {
        cell5.innerHTML = chosen.Visit;



    }
}


//This function will hide or show an HTML element on the page
//Just pass it the id of the element you want to show/hide
function hideOrShowElement() {
    let el = document.querySelector("#selectPark");
    let la = document.querySelector("#selectType");
    let locationButton = document.querySelector("#location");
    let parkTypeButton = document.querySelector("#type");


    if (locationButton.checked) {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }

    // if(parkTypeButton.value === "type"){
    //     la.style.display = "block";
    // }else {
    //     la.style.display = "none";
    // }

    // function yesnoCheck() {
    //     if (document.getElementById('yesCheck').checked) {
    //         document.getElementById('ifYes').style.display = 'block';
    //     } else {
    //         document.getElementById('ifYes').style.display = 'none';
    //     }
    // }
}
