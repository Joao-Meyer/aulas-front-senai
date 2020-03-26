"use strict";

const $cep = document.getElementById('cep');

const preencheFormulario = ( endereco ) => {
    document.getElementById( 'endereco' ).value = endereco.logradouro;

    document.getElementById( 'bairro' ).value = endereco.bairro;

    document.getElementById( 'cidade' ).value = endereco.localidade;

    document.getElementById( 'estado' ).value = endereco.uf;
}

const verificarCep = () => $cep.reportValidity();

const encontrarCep = async ( cep ) => {

    if ( verificarCep () ){
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const getAdrress = await fetch ( url );
        const address = await getAdrress.json();

        preencheFormulario ( address );

        // fetch ( url ).then ( response => response.json().then ( data => preencheFormulario( data ) )
        //                     .catch ( error => console.log ( error ) ) );

        document.getElementById( 'endereco' ).value = 'Pesquisando...';
        document.getElementById( 'bairro' ).value = 'Pesquisando...';
        document.getElementById( 'cidade' ).value = 'Pesquisando...';
        document.getElementById( 'estado' ).value = 'Pesquisando...';
    }
}

const marcararCep = ( $cep ) => {
    let aux = $cep.value;

    aux = aux.replace ( /[^0-9]/g, '' );

    aux = aux.replace ( /(.{5})(.)/, '$1-$2' );

    $cep.value = aux;
}

const cepAlterado = () => {
    encontrarCep( $cep.value );
}

const mascaraCep = () => {
    marcararCep ( $cep );
}

$cep.addEventListener('blur', cepAlterado);

$cep.addEventListener('keyup', mascaraCep);