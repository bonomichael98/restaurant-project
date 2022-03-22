let cocktailApiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

fetch(cocktailApiURL)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
