
// FIXME: VOIR LES DIFFERENTES OPTIMISATIONS POSSIBLES


// voir systeme controller

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
function sortPokemonByName(){
    const data = import_pokemon(pokemon,pokemon_type,pokemon_moves)
    let res = data.sort((a,b) => a._name.localeCompare(b._name));
    return res;
}

//FIXME : La fonction ne rempli pas son rôle
function sortPokemonByStamina(){
    const data = import_pokemon(pokemon,pokemon_type,pokemon_moves)
    let res = data.sort((a,b) => a._baseStamina - b._baseStamina);
    return res;
}


//test
//console.log(getPokemonByType("Grass"));
//console.log(getPokemonByAttack("Vine Whip"));
//console.log(getAttackByType("Grass"));
//console.log(sortPokemonByName());
//console.log("le sort by stamina 2:");
//console.log(sortPokemonByStamina());