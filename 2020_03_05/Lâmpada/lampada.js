'use strict';

const $lampada = document.getElementById( 'lampada' );
const $interruptor = document.getElementById( 'interruptor' );
const $tutsTuts = document.getElementById( 'tutsTuts' );

const alteraImagem = ( element, nomeImagem ) => {
    element.src = nomeImagem;
}

const alteraLigado = () => {
    alteraImagem( $lampada, "./img/ligada.jpg" );
    alteraImagem( $interruptor, "./img/interruptor_ligado.jpg" )
};
const alteraDesligado = () => {
    alteraImagem( $lampada, "./img/desligada.jpg" );
    alteraImagem( $interruptor, "./img/interruptor_desligado.jpg" )
};

const ligaDesliga = () => {
    alteraLigado());
    alteraDesligado());
}

let idPiscar;

const piscar = () => {
    if ( idPiscar === undefined ){
        idPiscar = setInterval( ligaDesliga, 500 );
    }
}

const pararPiscar = () => {
    clearInterval( liga );
    clearInterval( desliga );
}

// $lampada.addEventListener( 'mouseenter', alteraLigado);
// $lampada.addEventListener( 'mouseleave', alteraDesligado);
$tutsTuts.addEventListener( 'click', pisca );
$interruptor.addEventListener( 'click', pararPiscar );
$interruptor.addEventListener( 'mouseenter', alteraLigado);
$interruptor.addEventListener( 'mouseleave', alteraDesligado);