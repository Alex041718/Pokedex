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

let all_pokemons = [];
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
                    move.charged_moves.forEach(moveName => {
                            // m c'est un nom de move
                            charged_moves.forEach(object => {
                                    //console.log("object.name" + object.name + "/ moveName : " + moveName);
                                    if (object.name === moveName){
                                        arrayMoves.push(new Attack(object.name, object));
                                    }
                                }
                            )
                        });
                    move.fast_moves.forEach(moveName => {
                            // m c'est un nom de move
                            fast_moves.forEach(object => {
                                    //console.log("object.name" + object.name + "/ moveName : " + moveName);
                                    if (object.name === moveName){
                                        arrayMoves.push(new Attack(object.name, object));
                                    }
                                }
                            )
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
            all_pokemons.push(pokemon_obj);
        }
    });
    return all_pokemons;
}



//console.log(JSON.stringify(import_pokemon(pokemon,pokemon_type,pokemon_moves), null, 2));