"use strict";
// Access-Control-Allow-Origin: https://www.superheroapi.com
// Access-Control-Allow-Origin: *

const $barraPesquisaInicial = document.getElementById( 'pesquisaInicial' );
const $barraPesquisaPosterior = document.getElementById( 'pesquisaPosterior' );
const $conteinerResultadoPesquisaInicial = document.getElementById( 'conteinerResultadosPesquisaInicial' );
const $conteinerResultadoPesquisaPosterior = document.getElementById( 'conteinerResultadosPesquisaPosterior' );

// const $heroisResultado = document.getElementsByClassName( 'heroisResultado' );

// let heroInfo = [{
//     "id": "",
//     "name": "<div class='spinner blue'></div>",
//     "powerstats": {
//         "intelligence": "<div class='spinner green'></div>",
//         "strength": "<div class='spinner green'></div>",
//         "speed": "<div class='spinner green'></div>",
//         "durability": "<div class='spinner green'></div>",
//         "power": "<div class='spinner green'></div>",
//         "combat": "<div class='spinner green'></div>"
//     },
//     "biography": {
//         "full-name": "<div class='spinner green'></div>",
//         "alter-egos": "<div class='spinner green'></div>",
//         "aliases": {
//             "0": "<div class='spinner green'></div>"
//         },
//         "place-of-birth": "<div class='spinner green'></div>",
//         "first-appearence": "<div class='spinner green'></div>",
//         "publisher": "<div class='spinner green'></div>",
//         "alignment": "<div class='spinner green'></div>"
//     },
//     "appearance": {
//         "gender": "<div class='spinner green'></div>",
//         "race": "<div class='spinner green'></div>",
//         "height": {
//             "0": "<div class='spinner green'></div>",
//             "1": "<div class='spinner green'></div>"
//         },
//         "weight": {
//             "0": "<div class='spinner green'></div>",
//             "1": "<div class='spinner green'></div>"
//         },
//         "eye-color": "<div class='spinner green'></div>",
//         "hair-color": "<div class='spinner green'></div>"
//     },
//     "work": {
//         "occupation": "<div class='spinner green'></div>",
//         "base": "<div class='spinner green'></div>"
//     },
//     "connections": {
//         "group-affiliation": "<div class='spinner green'></div>",
//         "relatives": "<div class='spinner green'></div>"
//     },
//     "image": {
//         "url": 
//     }
// }];

let heroInfo = [{
    "id": "",
    "name": `<div class='letraGrande'>
                    <div class='spinner blue'></div>
                </div>`,
    "powerstats": {
        "intelligence": `<div class='letraNormal'>Intelligence: 
                                <div class='spinner green'></div>
                            </div>`,
        "strength": `<div class='letraNormal'>Strength: 
                            <div class='spinner green'></div>
                        </div>`,
        "speed": `<div class='letraNormal'>Speed: 
                        <div class='spinner green'></div>
                    </div>`,
        "durability": `<div class='letraNormal'>Durability: 
                            <div class='spinner green'></div>
                        </div>`,
        "power": `<div class='letraNormal'>Power: 
                        <div class='spinner green'></div>
                    </div>`,
        "combat": `<div class='letraNormal'>Combat: 
                        <div class='spinner green'></div>
                    </div>`
    },
    "biography": {
        "full-name": `<div class='letraNormal'>Full name:</div>
                        <div class='spinner green'></div>`,
        "alter-egos": `<div class='letraNormal'>Alter egos:</div>
                        <div class='spinner green'></div>`,
        "aliases": `<div class='letraNormal'>Aliases:</div>
                        <div class='spinner green'></div>`,
        "place-of-birth": `<div class='letraNormal'>Place of birth:</div>
                            <div class='spinner green'></div>`,
        "first-appearence": `<div class='letraNormal'>First appearence:</div>
                                <div class='spinner green'></div>`,
        "publisher": `<div class='letraNormal'>Publisher:</div>
                        <div class='spinner green'></div>`,
        "alignment": `<div class='letraNormal'>Alignment:</div>
                        <div class='spinner green'></div>`
    },
    "appearance": {
        "gender": `<div class='letraNormal'>Gender: 
                            <div class='spinner green'></div>
                        </div>`,
        "race": `<div class='letraNormal'>Race: 
                            <div class='spinner green'></div>
                        </div>`,
        "height": `<div class='letraNormal'>Height: 
                            <div class='spinner green'></div>
                        </div>`,
        "weight": `<div class='letraNormal'>Weight: 
                            <div class='spinner green'></div>
                        </div>`,
        "eye-color": `<div class='letraNormal'>Eye color: 
                            <div class='spinner green'></div>
                        </div>`,
        "hair-color": `<div class='letraNormal'>Hair color: 
                            <div class='spinner green'></div>
                        </div>`
    },
    "work": {
        "occupation": `<div class='letraNormal'>Occupation:</div>
                        <div class='spinner green'></div>`,
        "base": `<div class='letraNormal'>Base:</div>
                    <div class='spinner green'></div>`
    },
    "connections": {
        "group-affiliation": `<div class='letraNormal'>Group affiliation:</div>
                                <div class='spinner green'></div>`,
        "relatives": `<div class='letraNormal'>Relatives:</div>
                            <div class='spinner green'></div>`
    },
    "image": {
        "url": "<div class='spinner orange'></div>"
    }
}];

// const url = "https://www.superheroapi.com/api.php/1697582160383693/search/";

const infoFill = () => {
    let heroName = document.getElementById( 'conteinerNomeHeroi' );
    let heroImage = document.getElementById( 'conteinerImagemHeroi' );
    let heroPowerStats = document.getElementById( 'powerStats' );
    let heroAppearance = document.getElementById( 'appearance' );
    let heroConnections = document.getElementById( 'connections' );
    let heroWork = document.getElementById( 'work' );
    let heroBiography = document.getElementById( "biography" );
    // heroImage.style.backgroundImage = heroInfo[0].image.url;

    heroName.innerHTML = heroInfo[0].name;
    heroImage.innerHTML = heroInfo[0].image.url;
    // heroPowerStats.innerHTML = heroInfo[0].powerstats.combat;
    // heroAppearence.innerHTML = heroInfo[0].appearence.race;
    // heroConnections.innerHTML = heroInfo[0].connections.relatives;
    // heroWork.innerHTML = heroInfo[0].work.occupation;
    // heroBiography.innerHTML = heroInfo[0].biography["full-name"];

    //Esvazia Power Stats
    heroPowerStats.innerHTML = "<div class='nomeSecao letraNormal'>Power Stats</div>";
    //Esvazia Appearence
    heroAppearance.innerHTML = "<div class='nomeSecao letraNormal'>Appearance</div>";
    //Esvazia Connections
    heroConnections.innerHTML = "<div class='nomeSecao letraNormal'>Connections</div>";
    //Esvazia Work
    heroWork.innerHTML = "<div class='nomeSecao letraNormal'>Work</div>";
    //Esvazia Biography
    heroBiography.innerHTML = "<div class='nomeSecao letraNormal'>Biography</div>";

    //Preenche Power Stats
    for (var property in heroInfo[0].powerstats){
        heroPowerStats.innerHTML += heroInfo[0].powerstats[property];
    }
    //Preenche Appearence
    for (var property in heroInfo[0].appearance){
        heroAppearance.innerHTML += heroInfo[0].appearance[property];
    }
    //Preenche Connections
    for (var property in heroInfo[0].connections){
        heroConnections.innerHTML += heroInfo[0].connections[property];
    }
    //Preenche Work
    for (var property in heroInfo[0].work){
        heroWork.innerHTML += heroInfo[0].work[property];
    }
    //Preenche Biography
    for (var property in heroInfo[0].biography){
        heroBiography.innerHTML += heroInfo[0].biography[property];
    }
}

const resultsFill = ( results ) => {
    if( $conteinerResultadoPesquisaInicial.firstChild ){
        $conteinerResultadoPesquisaInicial.removeChild( $conteinerResultadoPesquisaInicial.firstChild );
    }

    if( $conteinerResultadoPesquisaPosterior.firstChild ){
        $conteinerResultadoPesquisaPosterior.removeChild( $conteinerResultadoPesquisaPosterior.firstChild );
    }

    const $conteinerTemporarioInicial = document.createElement( 'div' );
    const $conteinerTemporarioPosterior = document.createElement( 'div' );

    if( results != undefined ){
        results.forEach(element => {
            $conteinerTemporarioInicial.innerHTML += `<h1 class="heroisResultado" id="${element.id}">${element.name}</h1>`;
        });
    }

    $conteinerTemporarioPosterior.innerHTML = $conteinerTemporarioInicial.innerHTML;

    $conteinerResultadoPesquisaInicial.appendChild( $conteinerTemporarioInicial );
    $conteinerResultadoPesquisaPosterior.appendChild( $conteinerTemporarioPosterior );
}

const showResults = () => {
    if( $barraPesquisaInicial.value || $barraPesquisaPosterior.value ){
        $conteinerResultadoPesquisaInicial.style.display = "block";
        $conteinerResultadoPesquisaPosterior.style.display = "block";
    }
    else {
        $conteinerResultadoPesquisaInicial.style.display = "none";
        $conteinerResultadoPesquisaPosterior.style.display = "none";
    }
}

const heroSearch = async( heroName ) => {
    heroName = "" + heroName;
    // if( heroName.lenght >= 2 ){
        const url = `https://www.superheroapi.com/api.php/1697582160383693/search/${heroName}`;
        const getResults = await fetch( url );
        const getJson = await getResults.json();
    
        resultsFill( await getJson.results );

        showResults();
    // }
}

const screenClean = () => {
    $barraPesquisaInicial.value = "";
    $barraPesquisaPosterior.value = "";

    const $conteinerInicial = document.getElementById( 'conteinerInicial' );
    const $conteinerPosterior = document.getElementById( 'conteinerPosterior' );

    // if( $conteinerInicial.style.display == "block" ){ 
        $conteinerInicial.style.display = "none";
    // }
    // if( $conteinerPosterior.style.display == "none" ){
        $conteinerPosterior.style.display = "block";
    // }
}

const heroInfoSearch = async ( event ) => {
    let heroId = event.target.id;

    screenClean();

    showResults();

    const url = `https://www.superheroapi.com/api.php/1697582160383693/${heroId}`;
    const getResults = await fetch( url );
    const getJson = await getResults.json();

    let aliases = "";

    getJson.biography.aliases.forEach(element => {
        aliases += `<div class='letraNormal letraCentralizada'>${element}</div>`;
    });

    heroInfo = [{
        "id": getJson.id,
        "name": `<div class='letraGrande'>${getJson.name}</div>`,
        "powerstats": {
            "intelligence": `<div class='letraNormal'>Intelligence: ${getJson.powerstats.intelligence}</div>`,
            "strength": `<div class='letraNormal'>Strength: ${getJson.powerstats.strength}</div>`,
            "speed": `<div class='letraNormal'>Speed: ${getJson.powerstats.speed}</div>`,
            "durability": `<div class='letraNormal'>Durability: ${getJson.powerstats.durability}</div>`,
            "power": `<div class='letraNormal'>Power: ${getJson.powerstats.power}</div>`,
            "combat": `<div class='letraNormal'>Combat: ${getJson.powerstats.combat}</div>`
        },
        "biography": {
            "full-name": `<div class='letraNormal'>Full name:</div>
                            <div class='letraNormal letraCentralizada'>${getJson.biography["full-name"]}</div>`,
            "alter-egos": `<div class='letraNormal'>Alter egos:</div>
                            <div class='letraNormal letraCentralizada'>${getJson.biography["alter-egos"]}</div>`,
            "aliases": `<div class='letraNormal'>Aliases:</div>${aliases}`,
            "place-of-birth": `<div class='letraNormal'>Place of birth:</div>
                                <div class='letraNormal letraCentralizada'>${getJson.biography["place-of-birth"]}</div>`,
            "first-appearence": `<div class='letraNormal'>First appearence:</div>
                                    <div class='letraNormal letraCentralizada'>${getJson.biography["first-appearence"]}</div>`,
            "publisher": `<div class='letraNormal'>Publisher:</div>
                            <div class='letraNormal letraCentralizada'>${getJson.biography.publisher}</div>`,
            "alignment": `<div class='letraNormal'>Alignment:</div>
                            <div class='letraNormal letraCentralizada'>${getJson.biography.alignment}</div>`
        },
        "appearance": {
            "gender": `<div class='letraNormal'>Gender: ${getJson.appearance.gender}</div>`,
            "race": `<div class='letraNormal'>Race: ${getJson.appearance.race}</div>`,
            "height": `<div class='letraNormal'>Height: ${getJson.appearance.height["1"]}</div>`,
            "weight": `<div class='letraNormal'>Weight: ${getJson.appearance.weight["1"]}</div>`,
            "eye-color": `<div class='letraNormal'>Eye color: ${getJson.appearance["eye-color"]}</div>`,
            "hair-color": `<div class='letraNormal'>Hair color: ${getJson.appearance["hair-color"]}</div>`
        },
        "work": {
            "occupation": `<div class='letraNormal'>Occupation:</div>
                            <div class='letraNormal letraCentralizada'>${getJson.work.occupation}</div>`,
            "base": `<div class='letraNormal'>Base:</div>
                        <div class='letraNormal letraCentralizada'>${getJson.work.base}</div>`
        },
        "connections": {
            "group-affiliation": `<div class='letraNormal'>Group affiliation:</div>
                                    <div class='letraNormal letraCentralizada'>${getJson.connections["group-affiliation"]}</div>`,
            "relatives": `<div class='letraNormal'>Relatives:</div>
                            <div class='letraNormal letraCentralizada'>${getJson.connections.relatives}</div>`
        },
        "image": {
            "url": `<img src='${getJson.image.url}' alt='${getJson.name} image' class='imagemHeroi'> `
        }
    }];

    infoFill();
}

$barraPesquisaInicial.addEventListener( 'keyup', () => heroSearch( $barraPesquisaInicial.value ) );
$barraPesquisaPosterior.addEventListener( 'keyup', () => heroSearch( $barraPesquisaPosterior.value ) );

$conteinerResultadoPesquisaInicial.addEventListener( 'click', () => heroInfoSearch( event ) );
$conteinerResultadoPesquisaPosterior.addEventListener( 'click', () => heroInfoSearch( event ) );

infoFill();

// console.log( heroInfo );