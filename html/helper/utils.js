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
}

function getAllTypes(){
    let res = Object.keys(type_effectiveness);
    return res;
}