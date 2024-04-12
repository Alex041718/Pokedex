// Récupération des Pokémons
// const dataPokemons = import_pokemon(pokemon, pokemon_type, pokemon_moves);
// Récupération du tableau (tbody)
let pokemonList = import_pokemon(pokemon, pokemon_type, pokemon_moves);
const tabPokemon = document.getElementById("bodyPokemonTable");
console.log(pokemonList)
// Parcours des données et création des lignes du tableau
pokemonList.forEach(pokemon => {
    // Création d'une nouvelle ligne (tr)
    let row = document.createElement("tr");

    // Création des cellules (td) pour chaque attribut du Pokémon
    let idCell = document.createElement("td");
    idCell.textContent = pokemon.id; 
    row.appendChild(idCell);

    let nameCell = document.createElement("td");
    nameCell.textContent = pokemon.name; 
    row.appendChild(nameCell);

    let genCell = document.createElement("td");
    genCell.textContent = "Génération " + pokemon._generation; 
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
    while(pokemonIdFormated.length < 3){
        pokemonIdFormated = "0" + pokemonIdFormated;
    }
    img.src = `../webp/sprites/${pokemonIdFormated}MS.webp`; // Utilisation de l'ID pour déterminer le chemin de l'image
    img.alt = pokemon.name; // Utilisation du nom pour définir l'attribut alt de l'image
    imageCell.appendChild(img);
    row.appendChild(imageCell);

    // Ajout de la ligne au tableau
    tabPokemon.appendChild(row);
});
