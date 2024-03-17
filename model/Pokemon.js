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
    constructor(id, name, baseAttack, baseDefense, baseStamina, type, moves) {
        this._id = id; 
        this._name = name;
        this._baseAttack = baseAttack;
        this._baseDefense = baseDefense;
        this._baseStamina = baseStamina;
        this._type = type; // array
        this._moves = moves;
    }

    toString() {
        return `${this.id}:${this._name}(${this._baseAttack},${this._baseDefense},${this._baseStamina})`;
    }
}

let all_pokemons = {};
function import_pokemon(pokemonData, pokemon_type, pokemon_moves){

//TODO : Filtrer pour ne garder que les formes normales et les mapper plutôt qu'un forEach
    pokemonData.forEach(field => {
        let pokemon_obj;
        if (field.form === "Normal"){
            let arrayType = [];
            pokemon_type.forEach(type => {
                if (type.pokemon_id === field.pokemon_id && type.form === "Normal"){

                    type.type.forEach(T => {

                        arrayType.push(new Type(T, type_effectiveness[T]));
                    });   


                
                    
                }
            });

            let arrayMoves = [];
            pokemon_moves.forEach(move => {
                if (move.pokemon_id === field.pokemon_id && move.form === "Normal"){
                    let arrayMoves = [];
                    move.charged_moves.forEach(moveName => {
                            // m c'est un nom de move
                            charged_moves.forEach(object => {
                                    console.log("object.name" + object.name + "/ moveName : " + moveName);
                                    if (object.name === moveName){
                                        
                                        arrayMoves.push(new Attack(object.name, object));
                                    }
                                }
                            )
                        });
                        move.fast_moves.forEach(m => {
                            // m c'est un nom de move
                                object => {
                                    if (object.name === moveName){
                                        arrayMoves.push(new Attack(object.name, object));
                                    }
                                }
                        });
                    
                }
            });
            pokemon_obj = new Pokemon(
                field.pokemon_id,
                field.pokemon_name,
                field.base_attack,
                field.base_defense,
                field.base_stamina,
                arrayType,
                arrayMoves
            );
            all_pokemons[field.pokemon_id] = pokemon_obj;
        }
    });
    return all_pokemons;
}



console.log(JSON.stringify(import_pokemon(pokemonData,pokemon_type,pokemon_moves), null, 2));