"use strict";
// Access-Control-Allow-Origin: https://www.superheroapi.com
// Access-Control-Allow-Origin: *

const $barraPesquisaInicial = document.getElementById( 'pesquisaInicial' );
const $barraPesquisaPosterior = document.getElementById( 'pesquisaPosterior' );
const $conteinerResultadoPesquisaInicial = document.getElementById( 'conteinerResultadosPesquisaInicial' );
const $conteinerResultadoPesquisaPosterior = document.getElementById( 'conteinerResultadosPesquisaPosterior' );

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
    "appearence": {
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
    let heroAppearence = document.getElementById( 'appearence' );
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

    //Preenche Power Stats
    for (var property in heroInfo[0].powerstats){
        heroPowerStats.innerHTML += heroInfo[0].powerstats[property];
    }
    //Preenche Appearence
    for (var property in heroInfo[0].appearence){
        heroAppearence.innerHTML += heroInfo[0].appearence[property];
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
        $conteinerTemporario.innerHTML += `<h1>${element}</h1>`;
    });

    if( $conteinerResultadoPesquisaInicial.firstChild  && $conteinerResultadoPesquisaPosterior.firstChild ){
        $conteinerResultadoPesquisaInicial.removeChild( $conteinerResultadoPesquisaInicial.firstChild );
    $conteinerResultadoPesquisaPosterior.removeChild( $conteinerResultadoPesquisaPosterior.firstChild );
    }

    $conteinerResultadoPesquisaInicial.appendChild( $conteinerTemporario );
    $conteinerResultadoPesquisaPosterior.appendChild( $conteinerTemporario );

    console.log($conteinerResultadoPesquisaInicial);
    console.log($conteinerResultadoPesquisaPosterior);
}

const heroSearch = async( heroName ) => {
    const url = `https://www.superheroapi.com/api.php/1697582160383693/search/${heroName}`;
    const getResults = await fetch( url );
    const getJson = await getResults.json();
    console.log( heroName );

    resultsFill( await getJson.results );
}

$barraPesquisaInicial.addEventListener( 'keyup', () => heroSearch( $barraPesquisaInicial.value ) );
$barraPesquisaPosterior.addEventListener( 'keyup', () => heroSearch( $barraPesquisaPosterior.value ) );

infoFill();

// console.log( heroInfo );