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
                        console.log(data);
                        let cocktail = {
                            name: data.drinks[0].strDrink,
                            img: data.drinks[0].strDrinkThumb,
                            description: data.drinks[0].strInstructions
                        }
                        console.log(cocktail);
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