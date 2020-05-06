"use strict";
// Access-Control-Allow-Origin: https://www.superheroapi.com
// Access-Control-Allow-Origin: *

const $barraPesquisaInicial = document.getElementById( 'pesquisaInicial' );
const $barraPesquisaPosterior = document.getElementById( 'pesquisaPosterior' );
const $conteinerResultadoPesquisaInicial = document.getElementById( 'conteinerResultadosPesquisaInicial' );
const $conteinerResultadoPesquisaPosterior = document.getElementById( 'conteinerResultadosPesquisaPosterior' );

// const $heroisResultado = document.getElementsByClassName( 'heroisResultado' );

let heroInfo = [{
    "id": "",
    "name": "<div class='spinner blue'></div>",
    "powerstats": {
        "intelligence": "<div class='spinner green'></div>",
        "strength": "<div class='spinner green'></div>",
        "speed": "<div class='spinner green'></div>",
        "durability": "<div class='spinner green'></div>",
        "power": "<div class='spinner green'></div>",
        "combat": "<div class='spinner green'></div>"
    },
    "biography": {
        "full-name": "<div class='spinner green'></div>",
        "alter-egos": "<div class='spinner green'></div>",
        "aliases": {
            "0": "<div class='spinner green'></div>"
        },
        "place-of-birth": "<div class='spinner green'></div>",
        "first-appearence": "<div class='spinner green'></div>",
        "publisher": "<div class='spinner green'></div>",
        "alignment": "<div class='spinner green'></div>"
    },
    "appearance": {
        "gender": "<div class='spinner green'></div>",
        "race": "<div class='spinner green'></div>",
        "height": {
            "0": "<div class='spinner green'></div>",
            "1": "<div class='spinner green'></div>"
        },
        "weight": {
            "0": "<div class='spinner green'></div>",
            "1": "<div class='spinner green'></div>"
        },
        "eye-color": "<div class='spinner green'></div>",
        "hair-color": "<div class='spinner green'></div>"
    },
    "work": {
        "occupation": "<div class='spinner green'></div>",
        "base": "<div class='spinner green'></div>"
    },
    "connections": {
        "group-affiliation": "<div class='spinner green'></div>",
        "relatives": "<div class='spinner green'></div>"
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
    heroPowerStats.innerHTML = "";
    //Esvazia Appearence
    heroAppearance.innerHTML = "";
    //Esvazia Connections
    heroConnections.innerHTML = "";
    //Esvazia Work
    heroWork.innerHTML = "";
    //Esvazia Biography
    heroBiography.innerHTML = "";

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
    const $conteinerTemporario = document.createElement( 'div' );

    results.forEach(element => {
        $conteinerTemporario.innerHTML += `<h1 class="heroisResultado" id="${element.id}">${element.name}</h1>`;
        
        console.log(element.name);
    });

    if( $conteinerResultadoPesquisaInicial.firstChild ){
        $conteinerResultadoPesquisaInicial.removeChild( $conteinerResultadoPesquisaInicial.firstChild );
    }

    if( $conteinerResultadoPesquisaPosterior.firstChild ){
        $conteinerResultadoPesquisaPosterior.removeChild( $conteinerResultadoPesquisaPosterior.firstChild );
    }

    $conteinerResultadoPesquisaInicial.appendChild( $conteinerTemporario );
    $conteinerResultadoPesquisaPosterior.appendChild( $conteinerTemporario );

    console.log($conteinerResultadoPesquisaInicial.firstChild);
    console.log($conteinerResultadoPesquisaPosterior);
}

const heroSearch = async( heroName ) => {
    const url = `https://www.superheroapi.com/api.php/1697582160383693/search/${heroName}`;
    const getResults = await fetch( url );
    const getJson = await getResults.json();
    console.log( heroName );

    resultsFill( await getJson.results );
}

const heroInfoSearch = async ( heroId ) => {
    const url = `https://www.superheroapi.com/api.php/1697582160383693/${heroId}`;
    const getResults = await fetch( url );
    const getJson = await getResults.json();

    let aliases = "";

    getJson.biography.aliases.forEach(element => {
        aliases += `<div class='letraNormal letraCentralizada'>${element}</div>`;
    });

    console.log(aliases);

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

    console.log( heroInfo );

    infoFill();
}

$barraPesquisaInicial.addEventListener( 'keyup', () => heroSearch( $barraPesquisaInicial.value ) );
$barraPesquisaPosterior.addEventListener( 'keyup', () => heroSearch( $barraPesquisaPosterior.value ) );

$conteinerResultadoPesquisaPosterior.addEventListener( 'click', () => heroInfoSearch( heroId ) );

infoFill();

// console.log( heroInfo );