'use strict';

const $semaforo = document.getElementById( 'img' );
const $vermelho = document.getElementById( 'vermelho' );
const $amarelo = document.getElementById( 'amarelo' );
const $verde = document.getElementById( 'verde' );
const $automatico = document.getElementById( 'automatico' );

const alteraImagem = ( element, nomeImagem ) => element.src = nomeImagem;

const alteraVermelho = () => alteraImagem( $semaforo, './img/vermelho.png' );
const alteraAmarelo = () => alteraImagem( $semaforo, './img/amarelo.png' );
const alteraVerde = () => alteraImagem( $semaforo, './img/verde.png' );

let estaVermelho = false;
let estaAmarelo = false;
let estaVerde = false;

// const automatico = () => {
//     if( estaVerde == true ){
//         ligarAmarelo();
//     }
//     else if( estaAmarelo == true ){
//         ligarVermelho();
//     }
//     else {
//         ligarVerde();
//     }
// }

const automatico = () => {
    alteraVerde();
    setTimeout( alteraAmarelo, 2000 );
    setTimeout( alteraVermelho, 4000 );
}

let idAutomatico;

const ligarAutomatico = () => {
    if( idAutomatico === undefined ){
        idAutomatico = setInterval( automatico, 6000 );
    }
}

const desligarAutomatico = () => {
    clearInterval( idAutomatico );
}

const ligarVermelho = () => {
    desligarAutomatico();
    alteraVermelho();
};

const ligarAmarelo = () => {
    desligarAutomatico();
    alteraAmarelo();
};

const ligarVerde = () => {
    desligarAutomatico();
    alteraVerde();
};

$vermelho.addEventListener( 'click', ligarVermelho );
$amarelo.addEventListener( 'click', ligarAmarelo );
$verde.addEventListener( 'click', ligarVerde );

$automatico.addEventListener( 'click', ligarAutomatico );