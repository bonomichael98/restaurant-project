let cocktailText1 = document.getElementById("cocktail1-text");
let cocktailText2 = document.getElementById("cocktail2-text");
let cocktailText3 = document.getElementById("cocktail3-text");
let cocktailText = [cocktailText1,cocktailText2,cocktailText3];

let cocktailImg1 = document.getElementById("cocktail1-img");
let cocktailImg2 = document.getElementById("cocktail2-img");
let cocktailImg3 = document.getElementById("cocktail3-img");
let cocktailImg = [cocktailImg1,cocktailImg2,cocktailImg3];




let cocktailSetup = function() {
    for (let i = 0; i<3 ; i++) {
        let cocktailApiURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        fetch(cocktailApiURL)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data){
                        //console.log(data);
                        let cocktail = {
                            name: data.drinks[0].strDrink,
                            img: data.drinks[0].strDrinkThumb,
                            description: data.drinks[0].strInstructions
                        }
                        //console.log(cocktail);
                        let textHead = document.createElement("h3");
                        textHead.textContent = cocktail.name;
                        textHead.classList = "subtitle is-4"

                        let textBody = document.createElement("p");
                        textBody.textContent = cocktail.description;

                        cocktailText[i].appendChild(textHead);
                        cocktailText[i].appendChild(textBody);

                        cocktailImg[i].innerHTML = "<img src="+cocktail.img+" alt="+cocktail.name+" class=\"drink-img\">";

                })}});
            }
}

cocktailSetup();




//send the input address here
let sentAddress = '';

//send the coordinates received from coordinateRequest
let receivedCoordinates = '';


$(document).ready(function(){

    $("#location-form").submit(function(event) {
        //prevents page loading on submit
        event.preventDefault();
    })
  
});


//this is coordinateRequest
var coordinateRequest = new XMLHttpRequest();

coordinateRequest.open('GET', 'https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&text=' + sentAddress);

coordinateRequest.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

coordinateRequest.onreadystatechange = function() {
    if (this.readyState === 4) {
        response.json().then(function(data){
            
            // console.log(data);
            // console.log('Status:', this.status);
            // console.log('Headers:', this.getAllResponseHeaders());
            // console.log('Body:', this.responseText);
            }
        )}
};

//coordinateRequest.send();



var request = new XMLHttpRequest();


//send the receivedCoordinates from coordinateRequest here
request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&start=' + receivedCoordinates + '&end=39.1171543,-84.5199081');

// request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     //console.log('Status:', this.status);
//     //console.log('Headers:', this.getAllResponseHeaders());
//     //console.log('Body:', this.responseText);
//   }
// };

// request.send();







// $("#your-location").on("enter"), function() {
//     console.log("location entered");
// }




