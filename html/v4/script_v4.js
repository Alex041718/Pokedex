// -------------------------------------  Modal CODE -------------------------------------



// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


let openModal = function() {
  modal.style.display = "block";
}


// A function that insert the data in the modal and open it
function openModalWithData(pokemon){
    let modalTitle = document.getElementById("modalTitle");
    let modalBody = document.getElementById("modalBody");
    let modalImage = document.getElementById("modalImage");
    let selectAttack = document.getElementById("selectAttack");
    let attackContainer = document.getElementById("attackContainer"); // ul tag

    modalTitle.textContent = pokemon.name;
    console.log(pokemon);

    let setAttackData = function(){
        let attack = selectAttack.value == 1 ? "charged" : "fast" // 0 -> "charged", 1 -> "fast"
        console.log(pokemon.moves[attack]);
        // clear list
        attackContainer.innerHTML = "";
        let attackData = pokemon.moves[attack];
        attackData.forEach(attack => {
            let attackItem = document.createElement("div");
            attackItem.className = "attackItem";
            let attackTitle = document.createElement("h3");
            attackTitle.textContent = attack.nameMove;
            let attackDetail = document.createElement("div");
            let attackPower = document.createElement("p");
            attackPower.textContent = "Puissance : " + attack.data.power;
            let attackType = document.createElement("p");
            attackType.textContent = "Type : " + attack.data.type;
            attackDetail.appendChild(attackPower);
            attackDetail.appendChild(attackType);
            attackItem.appendChild(attackTitle);
            attackItem.appendChild(attackDetail);

            
            attackContainer.appendChild(attackItem);
        });
    }

    // gestion du select des attack dans la modale
    setAttackData();
    selectAttack.addEventListener("change", function(){
        setAttackData();
    });

    


    //Formattage de l'id pour récupérer l'image
    let pokemonIdFormated = "" + pokemon.id
    while(pokemonIdFormated.length < 3){
        pokemonIdFormated = "0" + pokemonIdFormated;
    }

    modalImage.src = `../webp/images/${pokemonIdFormated}.webp`;
    modalImage.alt = pokemon.name;

    openModal();
}

// a function to clear the modal data
function clearModalData(){
  let modalTitle = document.getElementById("modalTitle");
  let modalBody = document.getElementById("modalBody");
  let modalImage = document.getElementById("modalImage");

  modalTitle.textContent = "";
  modalBody.textContent = "";
  modalImage.src = "";
  modalImage.alt = "";
}




// CLOSE MODAL

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// -------------------------------------  Display Pokemons -------------------------------------






// Récupération des Pokémons
// const dataPokemons = import_pokemon(pokemon, pokemon_type, pokemon_moves);
// Récupération du tableau (tbody)
let pokemonMap = import_pokemon(pokemon, pokemon_type, pokemon_moves);
let pokemonArray = Array.from(pokemonMap.entries());
let idDeb = 0; //element tout en haut de la liste
let idFin = 25;  //dernier element de la liste
displayTab(pokemonArray); //On affiche 25 pokémons dans le tableau

//Actions a realiser si les boutons sont cliqués
document.getElementById("btn-next").addEventListener("click", nextButtonClicked)
document.getElementById("btn-back").addEventListener("click", backButtonClicked)


function displayTab(listPokemon){
    const tabPokemon = document.getElementById("bodyPokemonTable");
    // Supprimer les anciennes lignes du tableau
    tabPokemon.innerHTML = '';

    // Parcours des données et création des lignes du tableau
    for(let i = idDeb; i < idFin && i < listPokemon.length; i++){
        const [key, pokemon] = listPokemon[i];
    //pokemonList.forEach(pokemon => {
        let row = document.createElement("tr");

        row.addEventListener("click", () => {openModalWithData(pokemon)});


        let idCell = document.createElement("td");
        idCell.className = "idCell";
        idCell.textContent = pokemon.id; 
        row.appendChild(idCell);

        let nameCell = document.createElement("td");
        nameCell.className = "nameCell";
        nameCell.textContent = pokemon.name; 
        row.appendChild(nameCell);

        let genCell = document.createElement("td");
        genCell.className = "genCell";
        genCell.textContent = "Génération " + pokemon.generation; 
        row.appendChild(genCell);

        let typeCell = document.createElement("td");
        typeCell.className = "typeCell";
        typeCell.textContent = pokemon.type; 
        row.appendChild(typeCell);

        let staminaCell = document.createElement("td");
        staminaCell.className = "staminaCell";
        staminaCell.textContent = pokemon.baseStamina; 
        row.appendChild(staminaCell);

        let attackCell = document.createElement("td");
        attackCell.className = "attackCell";
        attackCell.textContent = pokemon.baseAttack; 
        row.appendChild(attackCell);

        let defenseCell = document.createElement("td");
        defenseCell.className = "defenseCell";
        defenseCell.textContent = pokemon.baseDefense;
        row.appendChild(defenseCell);

        let imageCell = document.createElement("td");
        imageCell.className = "imageCell";
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

// -------------------------------------  Set Filter -------------------------------------

// Récupération des types
let types = getAllTypes();
// Crétion des options
let selectType = document.getElementById("selectType");
types.forEach(type => {
    let option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    selectType.appendChild(option);
});

// Récupération des générations
let generations = [1,2,3,4,5,6,7,8];
// Crétion des options
let selectGen = document.getElementById("selectGen");
generations.forEach(gen => {
    let option = document.createElement("option");
    option.value = gen;
    option.textContent = "Génération " + gen;
    selectGen.appendChild(option);
});




// Gestion des filtres

let filterManager = (generation,type,name) => {
    // Reset de pokemonArray
    pokemonArray = Array.from(pokemonMap.entries());

    if(generation != null){
        pokemonArray = pokemonByGeneration(pokemonArray,generation);
    }
    if(type != null){
        pokemonArray = pokemonByType(pokemonArray,type);
    }
    if(name != null){
        pokemonArray = pokemonByName(pokemonArray,name);
    }

    
    // Reset des variables
    idDeb = 0;
    idFin = 25;
    displayTab(pokemonArray);

}

let pokemonByGeneration = (listPokemon,generation) => {
    res = [];
    for(let i = 0; i < listPokemon.length; i++){
        const [key, pokemon] = listPokemon[i];
        if(pokemon._generation == generation){
            res.push(listPokemon[i]);
        }
    }
    return res;
}

let pokemonByType = (listPokemon,type) => {
    res = [];
    console.log(type);
    for(let i = 0; i < listPokemon.length; i++){
        const [key, pokemon] = listPokemon[i];
        pokemon._type.forEach(t => {
            if(t.typeName == type){

                res.push(listPokemon[i]);
            }
        });
    }
    return res;
}

let pokemonByName = (listPokemon,name) => {
    res = [];
    for(let i = 0; i < listPokemon.length; i++){
        const [key, pokemon] = listPokemon[i];
        if(pokemon._name.includes(name)){
            res.push(listPokemon[i]);
        }
    }
    return res;
}


// Gestion des filtres coté DOM
let searchInput = document.getElementById("searchInput");
let DOMFilterManager = () => {
    let generation = selectGen.value == "null" ? null : selectGen.value;
    let type = selectType.value == "null" ? null : selectType.value;
    let name = searchInput.value == "" ? null : searchInput.value;
    
    
    console.log(generation);
    console.log(type);
    console.log(name);

    filterManager(generation,type,name);
}



// Ajout des listeners sur les selects et inputs


selectType.addEventListener("change", DOMFilterManager);
selectGen.addEventListener("change", DOMFilterManager);
searchInput.addEventListener("input", DOMFilterManager);











// -------------------------------------  Navigation -------------------------------------

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
    displayTab(pokemonArray); 
}

//On revient aux 25 elements précédents dans le tableau
function backButtonClicked(){
    idFin = idDeb;
    idDeb -=25;
    displayTab(pokemonArray);
}







