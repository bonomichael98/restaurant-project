
let cocktailSetup = function() {
    for (let i = 0; i<3 ; i++) {
        let cocktailApiURL = "www.thecocktaildb.com/api/json/v1/1/random.php";

        fetch(cocktailApiURL)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data){
                        console.log(data);
                        // let cocktail = data.drinks[0].strDrink;
                        // console.log(cocktail);
                })}});
            }
}

cocktailSetup();