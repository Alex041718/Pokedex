function getGenById(id){
    let res = -1;
    for (const gen in generation) {
       for (const pokemon of generation[gen]) {
           if(pokemon.id == id){
               res = pokemon.generation_number;
           }
       }
    }
    return res;
    //return all_pokemons_maped.get(id)
}

