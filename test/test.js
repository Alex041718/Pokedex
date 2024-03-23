
// FIXME: VOIR LES DIFFERENTES OPTIMISATIONS POSSIBLES


// voir systeme controller

// FIXME: semble renvoyé des doublons
function getPokemonByType(typeName){
    const data = import_pokemon(pokemon,pokemon_type,pokemon_moves)
    //let res = data.filter(pokemon => pokemon._type.includes(typeName));
    let res = [];
    data.forEach(pokemon => {
        pokemon._type.forEach(type => {
            if(type.typeName === typeName){
                res.push(pokemon);
            }
        });
    });

    return res;
}




function getPokemonByAttack(attackName){
    const data = import_pokemon(pokemon,pokemon_type,pokemon_moves);
    let res = [];
    data.forEach(pokemon => {
        pokemon._moves.forEach(move => {
            if(move.nameMove === attackName){
                res.push(pokemon);
            }
        });
    });
    return res;
}

function getAttackByType(typeName){
    const data = import_pokemon(pokemon,pokemon_type,pokemon_moves);
    let attacks = [];
    data.forEach(pokemon => {
        pokemon._moves.forEach(move => {
            if (move.data.type === typeName) {
                attacks.push(move);
            }
        });
    });
    return attacks;
}
//TODO: on se retrouve avec des doublons car différentes formes, est-ce qu'on laisse ainsi ?
// FIXME: les deux fonctions suivantes sont un peu lentes
function sortPokemonByName(){
    const data = import_pokemon(pokemon,pokemon_type,pokemon_moves)
    let res = data.sort((a,b) => a._name.localeCompare(b._name));
    return res;
}

function sortPokemonByStamina(){
    const data = import_pokemon(pokemon,pokemon_type,pokemon_moves)
    let res = data.sort((a,b) => a._baseStamina - b._baseStamina);
    return res;
}


function getEffectiveness(attack,defense){
    // attack : string : the name of the attack
    // defense : ARRAY of string : the types of the pokemon

    let type;

    charged_moves.forEach(move => {
        if(move.name === attack){
            type = move.type;
        }
    });
    // Search in fast_moves :
    fast_moves.forEach(move => {
        if(move.name === attack){
            type = move.type;
        }
    });

    if(type === undefined){
        console.log("Attack not found");
        return -1;
    }

    let effectivenessValue = 1;
    // console.log("-----------------")
    defense.forEach(typeDefense => {
        // console.log("typeDefense: ",typeDefense.typeName)
        // console.log("attack: ",type)
        // console.log(effectivenessValue)
        // console.log("->",type_effectiveness[typeDefense.typeName][type])
        effectivenessValue *= type_effectiveness[typeDefense.typeName][type];
    });

    // console.log("fin de la fonction getEffectiveness")
    return effectivenessValue;
}

function getWeakestEnemies(attack){
    


    // Browse all pokemons
    // look for the type of each pokemon, they can have multiple types, so we multiply the effectiveness of the attack against each type
    let dataPokemons = import_pokemon(pokemon,pokemon_type,pokemon_moves);
    let browsePokemons = []; // Array of objects {pokemon: pokemon, effectiveness: effectiveness}

    dataPokemons.forEach(pokemon => {
        let typesOfPokemon = pokemon._type;
        
        let effectivenessPokemon = getEffectiveness(attack,typesOfPokemon)
        browsePokemons.push({pokemon: pokemon, effectiveness: effectivenessPokemon});
    });

    // Sort by effectiveness
    browsePokemons.sort((a,b) => a.effectiveness - b.effectiveness);
    // get all pokemons with the upper effectiveness
    let weakestPokemons = [];
    let weakestEffectiveness = browsePokemons[0].effectiveness;
    browsePokemons.forEach(pokemon => {
        if(pokemon.effectiveness === weakestEffectiveness){
            weakestPokemons.push(pokemon.pokemon);
        }
    });
    return weakestPokemons;

    

}

function getPokemonByName(pokemonName){
    const data = import_pokemon(pokemon, pokemon_type, pokemon_moves);
    return data.find(pokemon => pokemon._name === pokemonName);
}

function getBestAttackTypesForEnemy(enemy){
    const enemyPokemon = getPokemonByName(enemy);
    if(!enemyPokemon){
        console.log("Enemy not found");
        return [];
    }

    const enemyTypes = enemyPokemon._type.map(type => type.typeName);
    const attackTypes = Object.keys(type_effectiveness); // Récupère tous les types d'attaque disponibles

    let typeEfficiencies = {}; // Stocker les valeurs d'efficacité

    // Calculer les valeurs d'efficacité pour chaque paire d'attaques et de défenses
    attackTypes.forEach(attackType => {
        let totalDamage = 0;
        enemyTypes.forEach(defenseType => {
            totalDamage += type_effectiveness[attackType][defenseType];
        });
        typeEfficiencies[attackType] = totalDamage;
    });
    // console.log(typeEfficiencies);
    // Trouver le(s) type(s) d'attaque avec le plus haut niveau d'efficacité
    let bestTypes = [];
    let highestDamage = -1;

    Object.keys(typeEfficiencies).forEach(type => {
        if (typeEfficiencies[type] >= highestDamage) {
            if (typeEfficiencies[type] > highestDamage) {
                bestTypes = [type];
                highestDamage = typeEfficiencies[type];
            } else {
                bestTypes.push(type);
            }
        }
    });

    return bestTypes;
}


//test
//console.table(getPokemonByType("Grass"));
//console.table(getPokemonByAttack("Vine Whip"));
console.table(getAttackByType("Grass"));
//console.table(sortPokemonByName());
//console.log("le sort by stamina 2:");
//console.table(sortPokemonByStamina());
//console.table(getBestAttackTypesForEnemy("Charizard"));
// console.log(getWeakestEnemies("Megahorn"));
//console.log(getEffectiveness("Megahorn",["Grass","Poison"])); //
// console.log(getBestAttackTypesForEnemy("Bulbasaur"))
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pokemonByType').addEventListener('click', function(event) {
        event.preventDefault();
        console.table(getPokemonByType('Grass'));
    });

    document.getElementById('pokemonByAttack').addEventListener('click', function(event) {
        event.preventDefault();
        console.table(getPokemonByAttack('Vine Whip'));
    });

    document.getElementById('attackByType').addEventListener('click', function(event) {
        event.preventDefault();
        console.log(getAttackByType('Grass'));
    });
//fixme: un peu lent je trouve
    document.getElementById('sortPokemonByName').addEventListener('click', function(event) {
        event.preventDefault();
        console.table(sortPokemonByName());
    });
//FIXME: un peu lent je trouve
    document.getElementById('sortPokemonByStamina').addEventListener('click', function(event) {
        event.preventDefault();
        console.table(sortPokemonByStamina());
    });

    document.getElementById('weakestEnemies').addEventListener('click', function(event) {
        event.preventDefault();
        console.log(getWeakestEnemies('Megahorn'));
    });

    document.getElementById('bestAttackTypes').addEventListener('click', function(event) {
        event.preventDefault();
        console.log(getBestAttackTypesForEnemy('Charizard'));
    });
});