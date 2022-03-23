let cocktailApiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
let googleAutocompleteURL = "https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters&key=AIzaSyCUWf_0fYUln2C1Z1GPbLLPT3fERLMMx7M";

fetch(cocktailApiURL)
    .then(function(response) {
        console.log(response);
        return response.json();
    });

fetch(googleAutocompleteURL)