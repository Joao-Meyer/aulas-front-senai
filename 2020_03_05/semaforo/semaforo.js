'use strict';

const $semaforo = document.getElementById( 'img' );
const $vermelho = document.getElementById( 'vermelho' );
const $amarelo = document.getElementById( 'amarelo' );
const $verde = document.getElementById( 'verde' );
const $automatico = document.getElementById( 'automatico' );

const alteraImagem = ( element, nomeImagem ) => element.src = nomeImagem;

const ligarVermelho = () => alteraImagem( $semaforo, './img/vermelho.png' );
