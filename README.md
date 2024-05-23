# Capstone Project: Enjoy the Outdoors
### About Enjoy the Outdoors
Enjoy the Outdoors is a mock webpage for an audience who are intrested of exploring locations of mountains and parks. Made up by using HTML, CSS, Bootstrap, and JavaScript. This website functions with clickable links and dropdown menus that include data of information. I gave the website a clean modern feel with usage of greys,black, and white.

**Features**  
- Home Page
- National Park Page
- Mountain Search Page


## Home Page
![homepage](/images/indexPage.PNG)

## National Park Page
![nationalPage](/images/nationalParkPage.PNG)
![nationaPage](/images/inuseNational.PNG)

## Mountain Search Page
![mountainPage](/images/mountainsPage.PNG)

## Intresting code
A piece of code that I would say I find intresting was the making of the card on the mountains page. I was happy that I was able to understand the way of making a code in JavaScript. I had a fun time figuring this out to make it my own. I began by actually writting this code down on paper first then transfering it over. 

```javascript

 let wholeCard = document.createElement("div");
 wholeCard.classList.add("card", "text-center", "w-25", "mx-auto","mt-4");

 let cardHeader = document.createElement("div");
 cardHeader.classList.add("card-header", "bg-dark", "text-light");

 cardHeader.innerText = mountain.name;

 let cardBody = document.createElement("div")
 cardBody.classList.add("card-body","bg-dark", "text-light");

 let cardImage = document.createElement("img");
 cardImage.classList.add("card-img-top","card-img-fit");


 cardImage.src = `images/${mountain.img}`;


    let cardText = document.createElement("p");
   cardText.classList.add("card-text");
   cardText.innerText = `${mountain.desc}`

cardBody.appendChild(cardImage);
cardBody.appendChild(cardText);

let footer1= document.createElement("div")
footer1.classList.add("card-footer", "bg-secondary");

footer1.innerText = `Elevation : ${mountain.elevation}`;

let footer2= document.createElement("div")
footer2.classList.add("card-footer", "bg-secondary");

footer2.innerText = `Effort : ${mountain.effort}`;

let footer3= document.createElement("div")
footer3.classList.add("card-footer", "bg-secondary");

footer3.innerText=`Lat:${mountain.coords.lat} Long: ${mountain.coords.lng}`;



wholeCard.appendChild(cardHeader);
wholeCard.appendChild(cardBody);
wholeCard.appendChild(footer1);
wholeCard.appendChild(footer2);
wholeCard.appendChild(footer3);

mountainDiv.appendChild(wholeCard);

```
