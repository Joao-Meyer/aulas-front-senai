"use strict";

const $cep = document.getElementById('cep');

const preencheFormulario = ( endereco ) => {
    document.getElementById( 'endereco' ).value = endereco.logradouro;

    document.getElementById( 'bairro' ).value = endereco.bairro;

    document.getElementById( 'cidade' ).value = endereco.localidade;

    document.getElementById( 'estado' ).value = endereco.uf;
}

const encontrarCep = ( cep ) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch ( url ).then ( response => response.json().then ( data => preencheFormulario( data ) ) );
}

const cepAlterado = () => {
    encontrarCep( $cep.value );
}

// const preencheCampo = ( valorCampo, idCampo ) => {
//     document.getElementById( idCampo ).value = valorCampo;
// }

// const preencheFormulario = ( cep ) => {
//     const endereco = encontrarCep( cep );

//     console.log( endereco );

//     endereco
//     bairro
//     cidade
//     estado
// }

$cep.addEventListener('change', cepAlterado);