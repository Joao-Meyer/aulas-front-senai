'use strict';

const $semaforo = document.getElementById( 'img' );
const $vermelho = document.getElementById( 'vermelho' );
const $amarelo = document.getElementById( 'amarelo' );
const $verde = document.getElementById( 'verde' );
const $automatico = document.getElementById( 'automatico' );

const alteraImagem = ( element, nomeImagem ) => element.src = nomeImagem;

const ligarVermelho = () => alteraImagem( $semaforo, './img/vermelho.png' );
const ligarAmarelo = () => alteraImagem( $semaforo, './img/amarelo.png' );
const ligarVerde = () => alteraImagem( $semaforo, './img/verde.png' );

let estaVermelho = false;
let estaAmarelo = false;
let estaVerde = false;

const automatico = () => {
    if( estaVerde == true ){
        ligarAmarelo();
    }
    else if( estaAmarelo == true ){
        ligarVermelho();
    }
    else {
        ligarVerde();
    }
}

let idAutomatico;

const ligarAutomatico = () => {
    if( idAutomatico === undefined ){
        idAutomatico = setInterval( automatico, 1000 );
    }
}

$vermelho.addEventListener( 'click', ligarVermelho );
$amarelo.addEventListener( 'click', ligarAmarelo );
$verde.addEventListener( 'click', ligarVerde );

$automatico.addEventListener( 'click', ligarAutomatico );