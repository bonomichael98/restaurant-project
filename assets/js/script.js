let fetchCocktail = function() {
    let cocktailApiURL = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(cocktailApiURL) 
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data){
                    // pick out the impostant parts of the data returned
                    let cityLat = (data.results[0].location.lat);
                    let cityLng = (data.results[0].location.lng);
                    // Calls the next function
                    weatherDataHandler(cityLat,cityLng,cityName);
            })}});
            
        }

fetchCocktail();