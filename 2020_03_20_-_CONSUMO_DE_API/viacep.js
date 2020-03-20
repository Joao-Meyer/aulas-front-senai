"use stritc";

const encontrarCep = ( cep ) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch ( url ).then( response => response.json().then( data => data ) );
}