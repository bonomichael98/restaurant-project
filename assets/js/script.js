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



var coordinateRequest = new XMLHttpRequest();

coordinateRequest.open('GET', 'https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&text=rhinegeist%20brewery');

coordinateRequest.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

coordinateRequest.onreadystatechange = function(response) {
  if (this.readyState === 4) {
    response.json().then(function(data){
        console.log(data);
    })
    // console.log('Status:', this.status);
    // console.log('Headers:', this.getAllResponseHeaders());
    // console.log('Body:', this.responseText);
  } 
};

coordinateRequest.send();

var request = new XMLHttpRequest();

request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&start=8.681495,49.41461&end=8.687872,49.420318');

request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();








// $("#your-location").on("enter"), function() {
//     console.log("location entered");
// }



// window.onload = function() {
//     var apiKey = location.search.split('api_key=')[1];

//     if (!apiKey || apiKey === 'put_your_key_here') {
//       var node = document.getElementById("driving-car-directions");
//       node.innerHTML = "<p>Please provide an API key via <b>?api_key=mykey</b> query parameter </p>";
//     } else {
//       let orsDirections = new Openrouteservice.Directions({
//         api_key: apiKey
//       });

//       var node = document.getElementById("driving-car-directions");

//       orsDirections.calculate({
//         coordinates: [[8.690958, 49.404662], [8.687868, 49.390139]],
//         profile: "driving-car",
//         extra_info: ["waytype", "steepness"],
//         format: "json",
//         api_version: 'v2',
//       })
//         .then(function(json) {
//             // Add your own result handling here
//             let response = JSON.stringify(json, null, "\t")
//             console.log(response);
//             response = response.replace(/(\n)/g, '<br>');
//             response = response.replace(/(\t)/g, '&nbsp;&nbsp;');
//             node.innerHTML = "<h3>Response</h3><p>" + response + "</p>";
//         })
//         .catch(function(err) {
//             let response = JSON.stringify(err, null, "\t")
//             console.error(response);
//             response = response.replace(/(\n)/g, '<br>');
//             response = response.replace(/(\t)/g, '&nbsp;&nbsp;');
//             node.innerHTML = "<h3>Error</h3><p>" + response + "</p>";
//         });
//     }

//   };

// let cocktailApiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
// let googleAutocompleteURL = "https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters&key=AIzaSyCUWf_0fYUln2C1Z1GPbLLPT3fERLMMx7M";

// fetch(cocktailApiURL)
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     });

// fetch(googleAutocompleteURL)
