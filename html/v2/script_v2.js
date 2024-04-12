// Récupération des Pokémons
// const dataPokemons = import_pokemon(pokemon, pokemon_type, pokemon_moves);
// Récupération du tableau (tbody)
let pokemonMap = import_pokemon(pokemon, pokemon_type, pokemon_moves);
let pokemonArray = Array.from(pokemonMap.entries());
let idDeb = 0; //element tout en haut de la liste
let idFin = 25;  //dernier element de la liste
displayTab(); //On affiche 25 pokémons dans le tableau

//Actions a realiser si les boutons sont cliqués
document.getElementById("btn-next").addEventListener("click", nextButtonClicked)
document.getElementById("btn-back").addEventListener("click", backButtonClicked)


function displayTab(){
    const tabPokemon = document.getElementById("bodyPokemonTable");
    // Supprimer les anciennes lignes du tableau
    tabPokemon.innerHTML = '';

    // Parcours des données et création des lignes du tableau
    for(let i = idDeb; i < idFin && i < pokemonArray.length; i++){
        const [key, pokemon] = pokemonArray[i];
    //pokemonList.forEach(pokemon => {
        let row = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.textContent = pokemon.id; 
        row.appendChild(idCell);

        let nameCell = document.createElement("td");
        nameCell.textContent = pokemon.name; 
        row.appendChild(nameCell);

        let genCell = document.createElement("td");
        genCell.textContent = "Génération " + pokemon.generation; 
        row.appendChild(genCell);

        let typeCell = document.createElement("td");
        typeCell.textContent = pokemon.type; 
        row.appendChild(typeCell);

        let staminaCell = document.createElement("td");
        staminaCell.textContent = pokemon.baseStamina; 
        row.appendChild(staminaCell);

        let attackCell = document.createElement("td");
        attackCell.textContent = pokemon.baseAttack; 
        row.appendChild(attackCell);

        let defenseCell = document.createElement("td");
        defenseCell.textContent = pokemon.baseDefense;
        row.appendChild(defenseCell);

        let imageCell = document.createElement("td");
        let img = document.createElement("img");
        let pokemonIdFormated = "" + pokemon.id

        //Formattage de l'id pour récupérer l'image
        while(pokemonIdFormated.length < 3){
            pokemonIdFormated = "0" + pokemonIdFormated;
        }
        img.src = `../webp/sprites/${pokemonIdFormated}MS.webp`; // Utilisation de l'ID pour déterminer le chemin de l'image
        img.alt = pokemon.name; // Utilisation du nom pour définir l'attribut alt de l'image
        imageCell.appendChild(img);
        row.appendChild(imageCell);

        // Ajout de la ligne au tableau
        tabPokemon.appendChild(row);

        //Gestion de l'affichage des boutons de navigation
        displayButtonBack();
        displayButtonNext();
    }
}


// On affiche pas le bouton back si on est au début du tableau
function displayButtonBack(){
    if(idFin <= 25){
        document.getElementById("btn-back").style.display = "none";
    }
    else{
        document.getElementById("btn-back").style.display = "block";
    }
}

// On affiche pas le bouton next si on est a la fin du tableau
function displayButtonNext(){
    if(idFin >= pokemonArray.length){
        document.getElementById("btn-next").style.display = "none";
    }
    else{
        document.getElementById("btn-next").style.display = "block";
    }
}

//On passe aux 25 elements suivants dans le tableau
function nextButtonClicked() {
    idDeb = idFin; 
    idFin += 25; 
    displayTab(); 
}

//On revient aux 25 elements précédents dans le tableau
function backButtonClicked(){
    idFin = idDeb;
    idDeb -=25;
    displayTab();
}
