class Pokemon {
    constructor(id, name, generation, baseAttack, baseDefense, baseStamina, type, moves) {
        this._id = id; 
        this._name = name;
        this._generation = generation;
        this._baseAttack = baseAttack;
        this._baseDefense = baseDefense;
        this._baseStamina = baseStamina;
        this._type = type; // array
        this._moves = moves;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get baseAttack() {
        return this._baseAttack;
    }
    set baseAttack(value) {
        this._baseAttack = value;
    }
    get baseDefense() {
        return this._baseDefense;
    }
    set baseDefense(value) {
        this._baseDefense = value;
    }
    get baseStamina() {
        return this._baseStamina;
    }
    set baseStamina(value) {
        this._baseStamina = value;
    }
    get type() {
        let res = "";
        for(let i = 0; i < this._type.length; i++){
            res += this._type[i].typeName;
            if(i < this._type.length - 1){
                res += ", ";
            }
        }
        return res;
    }
    set type(value) {
        this._type = value;
    }
    get moves() {
        return this._moves;
    }
    set moves(value) {
        this._moves = value;
    }
    get generation() {
        return this._generation;
    }
    set generation(value) {
        this._generation = value;
    }

    toString() {
        return `${this.id}:${this._name}(${this._baseAttack},${this._baseDefense},${this._baseStamina})`;
    }
}

let all_pokemons = [];
function import_pokemon(pokemonData, pokemon_type, pokemon_moves) {
    let all_pokemons_maped = new Map(); // Créer une nouvelle Map

    // Parcourir les données Pokemon et ajouter chaque Pokemon à la Map
    pokemonData.forEach(field => {
        if (field.form === "Normal") {
            let arrayType = [];
            pokemon_type.forEach(type => {
                if (type.pokemon_id === field.pokemon_id && type.form === "Normal") {
                    type.type.forEach(T => {
                        arrayType.push(new Type(T, type_effectiveness[T]));
                    });
                }
            });

            let arrayMoves = [];
            pokemon_moves.forEach(move => {
                if (move.pokemon_id === field.pokemon_id && move.form === "Normal") {
                    move.charged_moves.forEach(moveName => {
                        charged_moves.forEach(object => {
                            if (object.name === moveName) {
                                arrayMoves.push(new Attack(object.name, object));
                            }
                        });
                    });
                    move.fast_moves.forEach(moveName => {
                        fast_moves.forEach(object => {
                            if (object.name === moveName) {
                                arrayMoves.push(new Attack(object.name, object));
                            }
                        });
                    });
                }
            });

            let pokemon_obj = new Pokemon(
                field.pokemon_id,
                field.pokemon_name,
                getGenById(field.pokemon_id),
                field.base_attack,
                field.base_defense,
                field.base_stamina,
                arrayType,
                arrayMoves,
            );
            all_pokemons_maped.set(field.pokemon_id, pokemon_obj); // Ajouter le Pokemon à la Map avec l'ID comme clé
        }
    });

    return all_pokemons_maped; // Renvoyer la Map remplie d'objets Pokemon
}


let all_pokemons_maped = new Map();
for (let i = 0; i < all_pokemons.length; i++){
    all_pokemons_maped.set(all_pokemons[i]._id, all_pokemons[i]);
}
//console.log(JSON.stringify(import_pokemon(pokemon,pokemon_type,pokemon_moves), null, 2));