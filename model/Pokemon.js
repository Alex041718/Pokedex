import pokemon from '../JSON/pokemon.js';


let pokemonData = pokemon;
console.log("la taille : " + pokemonData.length);
// [
//     {
//         "base_attack": 118,
//         "base_defense": 111,
//         "base_stamina": 128,
//         "form": "Fall_2019",
//         "pokemon_id": 1,
//         "pokemon_name": "Bulbasaur"
//     },
//     {
//         "base_attack": 118,
//         "base_defense": 111333,
//         "base_stamina": 128,
//         "form": "Normal",
//         "pokemon_id": 1,
//         "pokemon_name": "Bulbasaur"
//     },
//     {
//         "base_attack": 151,
//         "base_defense": 143,
//         "base_stamina": 155,
//         "form": "Normal",
//         "pokemon_id": 2,
//         "pokemon_name": "Ivysaur"
//     },
// ];

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

let all_pokemons = {};
function import_pokemon(){

//TODO : Filtrer pour ne garder que les formes normales et les mapper plutôt qu'un forEach
    pokemonData.forEach(field => {
        let pokemon_obj;
        if (field.form === "Normal"){
            pokemon_obj = new Pokemon(
                field.pokemon_id,
                field.pokemon_name,
                field.base_attack,
                field.base_defense,
                field.base_stamina
            );
            all_pokemons[field.pokemon_id] = pokemon_obj;
        }
    });
    return all_pokemons;
}



console.log(JSON.stringify(import_pokemon(), null, 2));