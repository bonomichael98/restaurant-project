let fetchCocktail = function() {
    let cocktailApiURL = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(cocktailApiURL) 
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data){
                   console.log(data);
            })}});
            
        }

fetchCocktail();