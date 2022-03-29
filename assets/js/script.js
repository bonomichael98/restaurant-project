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
// function getForm(event) {
//     event.preventDefault();
//     let sentAddress = document.getElementById("submitted-location").value;
//     console.log(sentAddress);

// }


//send the coordinates received from coordinateRequest
let receivedCoordinates = '';



$(document).ready(function(){

    $("#location-form").submit(function(event) {
        //prevents page loading on submit
        event.preventDefault();
        let sentAddress = document.getElementById("submitted-location").value;
        //console.log(sentAddress);


        //request the coordinates for the input address
        var coordinateRequest = new XMLHttpRequest();

        coordinateRequest.open('GET', 'https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&text=' + sentAddress);

        coordinateRequest.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

        coordinateRequest.onreadystatechange = function() {
            if (this.readyState === 4) {
                //console.log("Body", this.responseText);
                let response = this.responseText;
                //console.log("answer", JSON.stringify(response));
                let answer = JSON.stringify(response);
                //console.log(answer.split('"bbox": [').pop().split("]")[2]);
                let earlyCoordinates = answer.split('"bbox": [').pop().split("]" )[2];
                //console.log(earlyCoordinates);
                let almostReadyCoordinates = earlyCoordinates.slice(
                    earlyCoordinates.indexOf("["),
                    earlyCoordinates.lastIndexOf(""),
                )
                //console.log(almostReadyCoordinates);

                let nearlyReadyCoordinates = almostReadyCoordinates.slice(1);
                //console.log(nearlyReadyCoordinates);

                let coordinatesArray = nearlyReadyCoordinates.split(",");
                //console.log(coordinatesArray);

                coordinatesArray.splice(0, 1);
                coordinatesArray.splice(2);

                readyCoordinates = coordinatesArray.join(",")
                //console.log(readyCoordinates);
                
            

                
                //answer.indexOf("bbox")


                //beginning of directions
                var request = new XMLHttpRequest();


                //send the receivedCoordinates from coordinateRequest here
                request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&start=' + readyCoordinates + '&end=39.108608,-84.3022336');

                //request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&start=8.681495,49.41461&end=8.687872,49.420318');


               

                request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

                request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    //console.log('Status:', this.status);
                    //console.log('Headers:', this.getAllResponseHeaders());
                    //console.log('Body:', this.responseText);
                    let response2 = this.responseText;
                    let answer2 = JSON.stringify(response2);

                    let directions = answer2.split('"segments": [').pop().split('"summary":' )
                    console.log(directions);

                    $("#directions-text").text(directions);



                    }
                };
                request.send();



                













                }
            };
        coordinateRequest.send();
    })
});


//this is coordinateRequest


//coordinateRequest.send();



// var request = new XMLHttpRequest();


// //send the receivedCoordinates from coordinateRequest here
// request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&start=' + readyCoordinates + '&end=39.1171543,-84.5199081');

//  request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

//  request.onreadystatechange = function () {
//    if (this.readyState === 4) {
//      //console.log('Status:', this.status);
//      //console.log('Headers:', this.getAllResponseHeaders());
//      //console.log('Body:', this.responseText);
//    }
//  };

// request.send();







// $("#your-location").on("enter"), function() {
//     console.log("location entered");
// }




