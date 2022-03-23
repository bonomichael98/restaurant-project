let cocktailText1 = document.getElementById("cocktail1-text");
let cocktailText2 = document.getElementById("cocktail2-text");
let cocktailText3 = document.getElementById("cocktail3-text");
let cocktailText = [cocktailText1,cocktailText2,cocktailText3];

let cocktail1Img = document.getElementById("cocktail1-img");
let cocktail2Img = document.getElementById("cocktail2-img");
let cocktail3Img = document.getElementById("cocktail3-img");

let cocktailSetup = function() {
    for (let i = 0; i<3 ; i++) {
        let cocktailApiURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        fetch(cocktailApiURL)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data){
                        console.log(data);
                        let cocktail = {
                            name: data.drinks[0].strDrink,
                            img: data.drinks[0].strDrinkThumb,
                            description: data.drinks[0].strInstructions
                        }
                        console.log(cocktail);
                        let textHead = document.createElement("h3");
                        textHead.textContent = cocktail.name;

                        let textBody = document.createElement("p");
                        textBody.textContent = cocktail.description;

                        cocktailText[i].appendChild(textHead);
                        cocktailText[i].appendChild(textBody);

                })}});
            }
}

cocktailSetup();