"use strict";
import { validador, validadorEmail } from './masks.js';

const $novo = document.getElementById( 'novo' );
const $fechar = document.getElementById( 'fechar' );
const $salvar = document.getElementById( 'salvar' );
const $formulario = document.getElementById( 'form' );

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add('exibirModal');
const ocultarModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');

const salvarAluno = () => {
    // const $campoNome = document.getElementById( 'nome' );
    // $campoNome.setAttribute(pattern, "[a-zA-Z0-9]+");
    ocultarModal();
}

validador( $formulario );

validadorEmail( document.getElementById( 'email' ) );

$novo.addEventListener( 'click', () => exibirModal() );
$fechar.addEventListener( 'click', () => ocultarModal() );
$salvar.addEventListener( 'click', () => salvarAluno() );