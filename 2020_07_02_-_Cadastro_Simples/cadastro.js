"use strict";
import { validador, validadorEmail } from './masks.js';

const $novo = document.getElementById( 'novo' );
const $fechar = document.getElementById( 'fechar' );
const $salvar = document.getElementById( 'salvar' );

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add('exibirModal');
const ocultarModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');

const salvarAluno = () => {
    // const $campoNome = document.getElementById( 'nome' );
    // $campoNome.setAttribute(pattern, "[a-zA-Z0-9]+");
    ocultarModal();
}

validador( document.getElementById( 'form' ) );

validadorEmail( document.getElementById( 'email' ) );

const cargaDados = ( dados ) => {
    const $registros = document.getElementById( 'registros' );

    dados.forEach( element => {
        const $tr = document.createElement( 'tr' );

        $tr.innerHTML = `
            <td>${element.codigo}</td>
            <td>${element.aluno}</td>
            <td>${element.email}</td>
            <td>${element.celular}</td>
            <td>${element.cidade}</td>
            <td>${element.acoes}</td>
        `;

        $registros.appendChild( $tr );
    } );
}

const alunos = [
    {
        'codigo' : '1',
        'aluno' : 'Leonid',
        'email' : 'leonid@gmail.com',
        'celular' : '11914145151',
        'cidade' : 'São Roque',
        'acoes' : ''
    },
    {
        'codigo' : '2',
        'aluno' : 'Ana',
        'email' : 'Ana@gmail.com',
        'celular' : '11914145151',
        'cidade' : 'São Roque',
        'acoes' : ''
    }
];

cargaDados( alunos );

$novo.addEventListener( 'click', () => exibirModal() );
$fechar.addEventListener( 'click', () => ocultarModal() );
$salvar.addEventListener( 'click', () => salvarAluno() );