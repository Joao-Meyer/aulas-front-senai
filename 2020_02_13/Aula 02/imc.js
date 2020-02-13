"use strict";

const calculaImc = ( peso, altura ) => ( peso / (altura ** 2) );

const definirEstado = ( imc ) => {
    let mensagem;
    if ( imc < 18.6 ){ mensagem = 'abaixo do peso. Atenção!' }

    else if ( imc < 25 ){ mensagem = 'no peso ideal. Parabéns!' }

    else if ( imc < 30 ){ mensagem = 'levemente acima do peso.' }

    else if ( imc < 35 ){ mensagem = 'com obesidade grau I. Atenção!' }

    else if ( imc < 40 ){ mensagem = 'com obesidade grau II. Atenção!' }
    
    else { mensagem = 'com obesidade grau III. Atenção!' }

    return mensagem;
}

const exibirResultado = () => {
    const nome = document.getElementById( 'nome' ).value;
    const peso = document.getElementById( 'peso' ).value;
    const altura = document.getElementById( 'altura' ).value;
    const $resultado = document.getElementById( 'resultado' );
    const imc = calculaImc( peso, altura);
    const estado = definirEstado ( imc );

    $resultado.innerHTML = `${nome} seu IMC foi de ${imc}, você está ${estado}`;
}

document.getElementById( 'calcular' ).addEventListener( 'click', exibirResultado );