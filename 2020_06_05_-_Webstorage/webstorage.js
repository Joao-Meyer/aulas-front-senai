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

const atualizarLista = () => {
    var nome = localStorage.getItem( 'nome' );

    $listaCadastrados.innerHTML = ``;

    if( localStorage.hasOwnProperty( 'nomes' ) ){
        var json = JSON.parse( localStorage.getItem( 'nomes' ) );
        json.forEach( objeto => {
            $listaCadastrados.innerHTML += `<div>${ objeto.nome }</div>`;
        })
    }
}

const adicionar = () => {
    let nomes = new Array();

    var nome = prompt( "Insira o nome que será adicionado:" );

    if( localStorage.hasOwnProperty( 'nomes' ) ){
        nomes = JSON.parse( localStorage.getItem( 'nomes' ) );
    }

    nomes.push( { 'nome' : nome } );

    localStorage.setItem( 'nomes', JSON.stringify( nomes ) );

    atualizarLista();
}

const remover = () => {
    if( !( localStorage.hasOwnProperty( 'nomes' ) ) ){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será removido:" );

        var nomes = JSON.parse( localStorage.getItem( 'nomes' ) );

        alert(nomes);

        // var x = nomes.filter( ( item ) => { return item != nome } )

        // console.log(x[0]);

        // localStorage.removeItem(  );

        // console.log( nomes.filter( ( e ) => { return e == nome } ) );

        // localStorage.setItem( 'nomes', JSON.stringify( x ) );
    }
    atualizarLista();
}

const atualizar = () => {
    alert('Atualizar será implementado futuramente...');
}

const limpar = () => {
    localStorage.clear();

    atualizarLista();
}

atualizarLista();
$buttonAdicionar.addEventListener('click', ()=>{ adicionar() })
$buttonRemover.addEventListener('click', ()=>{ remover() })
$buttonAtualizar.addEventListener('click', ()=>{ atualizar() })
$buttonLimpar.addEventListener('click', ()=>{ limpar() })