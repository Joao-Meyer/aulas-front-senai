"use strict";

let DB = [
    {
        "uf": "Brasil",
        "suspeitos": "<div class='spinner orange'></div>",
        "confirmados": "<div class='spinner green'></div>",
        "mortes": "<div class='spinner blue'></div>"
    }
];

const showData = ( data ) => {
    const panel = `
        <div class='estado'>${ data.uf }</div>

        <div class='card suspeitos'>
            <div class="numeros">${ data.suspeitos }</div>
            <div class="titulo">SUSPEITOS</div>
        </div>

        <div class='card confirmados'>
            <div class="numeros">${ data.confirmados }</div>
            <div class="titulo">CONFIRMADOS</div>
        </div>

        <div class='card mortes'>
            <div class="numeros">${ data.mortes }</div>
            <div class="titulo">MORTES</div>
        </div>
    `;

    const $container = document.createElement ( 'div' );
    $container.innerHTML = panel;

    const $info = document.getElementById( 'info' );
    $info.removeChild ( $info.firstChild );
    $info.appendChild ( $container );
}

const getCoronaBrazil = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const getApi = await fetch ( url );
    const json = await getApi.json();
    const brazil = await {
        "uf": "Brasil",
        "suspeitos": json.data.cases,
        "confirmados": json.data.confirmed,
        "mortes": json.data.deaths
    }

    showData ( brazil );
}

const getCoronaState = async ( estado ) => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1';
    const getApi = await fetch ( url );
    const json = await getApi.json();
    DB = await json.data;
}

const findState = ( event ) => {
    const ufMap = event.target.parentNode.id;
    const getState = DB.find ( state => state.uf.match ( ufMap ) );
    const state = {
        "uf": getState.state,
        "suspeitos": getState.suspects,
        "confirmados": getState.cases,
        "mortes": getState.deaths
    }

    showData( state );
}

document.querySelector( 'svg' ).addEventListener( 'click', findState );

showData ( DB[0] );
getCoronaState();
getCoronaBrazil();
