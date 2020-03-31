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
    $info.appendChild ( $container );
}

showData ( DB[0] );