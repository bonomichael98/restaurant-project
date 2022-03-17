let cocktailApiURL = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';

fetch(cocktailApiURL)
    .then(function(response) {
        return response.json();
    })