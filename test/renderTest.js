
// Pokemon By Name :

let PokemonByNameBody = document.querySelector("#PokemonByNameBody");

let PokemonByNameData = sortPokemonByName();

PokemonByNameData.forEach(element => {
    // create tr element for each pokemon 
    let tr = document.createElement('tr');
    // td1 for id
    let td1 = document.createElement('td');
    td1.innerHTML = element._id;
    // append td1 to tr
    tr.appendChild(td1);
    // td2 for name
    let td2 = document.createElement('td');
    td2.innerHTML = element._name;
    // append td2 to tr
    tr.appendChild(td2);
    // td3 for type
    let td3 = document.createElement('td');
    let stringType = "";
    element._type.forEach(type => {
        stringType += type.typeName + " ";
    });
    td3.innerHTML = stringType;
    // append td3 to tr
    tr.appendChild(td3);

    //append tr to PokemonByNameBody
    PokemonByNameBody.appendChild(tr);
});
