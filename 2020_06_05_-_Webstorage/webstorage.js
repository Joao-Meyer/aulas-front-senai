"use strict";

// localStorage.setItem('propriedade', 'valor')
// localStorage.getItem('propriedade')
// localStorage.removeItem('propriedade')
// localStorage.clear()

const $buttonAdicionar = document.getElementById( 'adicionar' );
const $buttonRemover = document.getElementById( 'remover' );
const $buttonAtualizar = document.getElementById( 'atualizar' );
const $buttonLimpar = document.getElementById( 'limpar' );
const $listaCadastrados = document.getElementById( 'cadastrados' );

const existeNomes = () => {
    return localStorage.hasOwnProperty( 'nomes' );
}

const transformaEmJason = ( key ) => {
    return JSON.parse( localStorage.getItem( key ) );
}

const transformaEmString = ( json ) => {
    return JSON.stringify( json );
}

const atualizarLista = () => {
    var nome = localStorage.getItem( 'nome' );

    $listaCadastrados.innerHTML = ``;

    if( existeNomes() ){
        var json = transformaEmJason( 'nomes' );
        json.forEach( objeto => {
            $listaCadastrados.innerHTML += `<div>${ objeto.nome }</div>`;
        })
    }
}

const adicionar = () => {
    let nomes = new Array();

    var nome = prompt( "Insira o nome que será adicionado:" );

    if( existeNomes() ){
        nomes = transformaEmJason( 'nomes' );
    }

    nomes.push( { 'nome' : nome } );

    localStorage.setItem( 'nomes', transformaEmString( nomes ) );

    atualizarLista();
}

const remover = () => {
    if( !existeNomes() ){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será removido:" );

        var nomes = transformaEmJason( 'nomes' );

        // console.log(nomes);

        var nomesAtualizados = nomes.filter( n => n.nome != nome );

        // console.log( nomesAtualizados );

        localStorage.setItem( 'nomes', transformaEmString( nomesAtualizados ) );

        // var x = nomes.filter( ( item ) => { return item != nome } )

        // console.log(x[0]);

        // localStorage.removeItem(  );

        // console.log( nomes.filter( ( e ) => { return e == nome } ) );

        // localStorage.setItem( 'nomes', JSON.stringify( x ) );
    }
    atualizarLista();
}

const atualizar = () => {
    if( !existeNomes() ){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será alterado:" );

        var novoNome = prompt( "Insira o novo nome:" );

        var nomes = transformaEmJason( 'nomes' );

        var nomesAtualizados = nomes.map( n => { if( n.nome == nome ){
                    return n.nome = novoNome;
                }
            }
        );

        // console.log( nomesAtualizados );

        localStorage.setItem( 'nomes', transformaEmString( nomesAtualizados ) );
    }
    atualizarLista();
}

const limpar = () => {
    localStorage.clear();

    atualizarLista();
}

const inicializaPagina = () => {
    if( existeNomes() ){
        atualizarLista();
    }
}

inicializaPagina();

$buttonAdicionar.addEventListener('click', ()=>{ adicionar() })
$buttonRemover.addEventListener('click', ()=>{ remover() })
$buttonAtualizar.addEventListener('click', ()=>{ atualizar() })
$buttonLimpar.addEventListener('click', ()=>{ limpar() })