"use strict";

const $cep = document.getElementById ( 'cep' );
const $logradouro = document.getElementById ( 'endereco' );
const $bairro = document.getElementById ( 'bairro' );
const $cidade = document.getElementById ( 'cidade' );
const $estado = document.getElementById ( 'estado' );

const verificarCep = () => $cep.reportValidity();

const encontrarEndereco = async ( cep ) => {
    if ( verificarCep() ){
        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        const getAddress = await fetch ( url );
        const address = ( await getAddress ).json();

        console.log( await address );
        preencheFormulario( await address );
    }
}

const preencheFormulario = ( endereco ) => {
    $logradouro.value = endereco.logradouro;
    $bairro.value = endereco.bairro;
    $cidade.value = endereco.cidade;
    $estado.value = endereco.estado;
}

const marcararCep = ( $cep ) => {
    let aux = $cep.value;
    aux = aux.replace ( /[^0-9]/g, '' );
    aux = aux.replace ( /(.{5})(.)/, '$1-$2' );
    $cep.value = aux;
}

$cep.addEventListener ( 'blur', () => encontrarEndereco( $cep.value ));
$cep.addEventListener ( 'keyup', () => marcararCep( $cep ) );