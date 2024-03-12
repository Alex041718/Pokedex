import { pokemon } from "../JSON/pokemon.js";

// let pokemonData = [
//     {
//         "base_attack": 118,
//         "base_defense": 111,
//         "base_stamina": 128,
//         "form": "Fall_2019",
//         "pokemon_id": 1,
//         "pokemon_name": "Bulbasaur"
// }]

class Pokemon {
    constructor(id, name, baseAttack, baseDefense, baseStamina) {
        this.id = id;
        this.name = name;
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
        this.baseStamina = baseStamina;
    }

    toString() {
        return `${this.id}:${this.name}(${this.baseAttack},${this.baseDefense},${this.baseStamina})`;
    }
}

// Remplir l'objet JS avec les Pokémon
let all_pokemons = {};

function import_pokemon() {
    return pokemon; // Retourne les données Pokemon depuis le module
}

let pokemonArray = import_pokemon();

pokemonArray.forEach(data => {
    let pokemon_obj = new Pokemon(
        data.pokemon_id,
        data.pokemon_name,
        data.base_attack,
        data.base_defense,
        data.base_stamina
    );
    
    all_pokemons[data.pokemon_id] = pokemon_obj;
});

// Afficher l'objet JS dans la console
console.log(JSON.stringify(all_pokemons, null, 2));

