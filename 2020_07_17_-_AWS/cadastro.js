"use strict";
import { validador, validadorEmail } from './masks.js';

const $novo = document.getElementById( 'novo' );
const $fechar = document.getElementById( 'fechar' );
const $salvar = document.getElementById( 'salvar' );

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add('exibirModal');
const ocultarModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');

validador( document.getElementById( 'form' ) );

validadorEmail( document.getElementById( 'email' ) );

const criaElemento = ( data ) => {
  const $registros = document.getElementById( 'registros' );
  
  data.forEach( element => {
    const $tr = document.createElement( 'tr' );

    $tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nome}</td>
        <td>${element.email}</td>
        <td>${element.celular}</td>
        <td>${element.cidade}</td>
        <td>
          <button id='editar-${element.id}'>Editar</button>
          <button id='excluir-${element.id}'>Excluir</button>
        </td>
    `;
    $registros.appendChild( $tr );
  } );
}

const getAlunos = ( url ) => fetch ( url ).then ( res => res.json() );

const cargaDados = async ( ) => {
    const url = 'http://localhost/joao/aulas-front-senai/2020_07_09_-_Cadastro_Simples_API-PHP/apiphp-master/alunos/';

    const dados = await getAlunos( url );

    criaElemento( dados.data );
}

// const alunos = [
//     {
//         'codigo' : '1',
//         'aluno' : 'Leonid',
//         'email' : 'leonid@gmail.com',
//         'celular' : '11914145151',
//         'cidade' : 'São Roque',
//         'acoes' : ''
//     },
//     {
//         'codigo' : '2',
//         'aluno' : 'Ana',
//         'email' : 'Ana@gmail.com',
//         'celular' : '11914145151',
//         'cidade' : 'São Roque',
//         'acoes' : ''
//     }
// ];

function createAluno( aluno ) {
    const url = 'http://localhost/joao/aulas-front-senai/2020_07_09_-_Cadastro_Simples_API-PHP/apiphp-master/alunos/';
    const options = {
        method: 'POST',
        body: JSON.stringify( aluno )
    };

    fetch(url, options )
}

const salvarAluno = () => {
    const nome = document.getElementById( 'nome' ).value;
    const email = document.getElementById( 'email' ).value;
    const celular = document.getElementById( 'celular' ).value;
    const endereco = document.getElementById( 'endereco' ).value;
    const numero = document.getElementById( 'numero' ).value;
    const bairro = document.getElementById( 'bairro' ).value;
    const cidade = document.getElementById( 'cidade' ).value;
    const estado = document.getElementById( 'estado' ).value;
    const cep = document.getElementById( 'cep' ).value;

    // const aluno = {
    //     "nome": nome,
    //     "email": email,
    //     "celular": celular,
    //     "logradouro": endereco + ', ' + numero,
    //     "bairro": bairro,
    //     "cidade": cidade,
    //     "estado": estado,
    //     "cep": cep
    // };

    const aluno = {
        "nome": `'${nome}'`,
        "email": `'${email}'`,
        "celular": `'${celular}'`,
        "logradouro": `'${endereco}, ${numero}'`,
        "bairro": `'${bairro}'`,
        "cidade": `'${cidade}'`,
        "estado": `'${estado}'`,
        "cep": `'${cep}'`
    };

    console.log(aluno);

    createAluno( aluno );
    ocultarModal();
}

// const aluno = {
//     "id":"",
//     "nome": "Cleyde Gomes da Silva",
//     "email": "cleydegomes@gmail.com",
//     "celular": "1199988888",
//     "logradouro": "rua sem fim",
//     "bairro": "Sem nome",
//     "cidade": "Barueri",
//     "estado": "SP",
//     "cep": "18135300"
// };
  
// createAluno(aluno);

// function updateAluno( aluno ) {
// const url = `http://localhost/00-planejamento/apiphp/alunos/${aluno.id}`;
// const options = {
//     method: 'PUT',
//     body: JSON.stringify( aluno )
// };

// fetch(url, options )
// }
  
// const aluno = {
//     "id":"5",
//     "nome": "Cleyde Gomes da Silva",
//     "email": "cleydegomes@gmail.com",
// };
  
// updateAluno(aluno);

cargaDados( );
$novo.addEventListener( 'click', () => exibirModal() );
$fechar.addEventListener( 'click', () => ocultarModal() );
$salvar.addEventListener( 'click', () => salvarAluno() );

/*
    -------------------------- GET -------------------------------
const getAlunos = ( url ) => fetch ( url ).then ( res => res.json() );

const  showAlunos = async () =>  {
    const url = 'http://localhost/00-planejamento/apiphp/alunos/';
    const alunos = await getAlunos(url);
    console.log(alunos.data);
};
showAlunos();

    -------------------------- POST -----------------------------
function createAluno( aluno ) {
    const url = 'http://localhost/00-planejamento/apiphp/alunos/';
    const options = {
      method: 'POST',
      body: JSON.stringify( aluno )
    };
  
    fetch(url, options )
  }
  
    const aluno = {
      "id":"",
      "nome": "Cleyde Gomes da Silva"
      "email": "cleydegomes@gmail.com",
      "celular": "1199988888",
      "logradouro": "rua sem fim",
      "bairro": "Sem nome",
      "cidade": "Barueri",
      "estado": "SP",
      "cep": "18135300"
  };
  
  createAluno(aluno);

   function updateAluno( aluno ) {
    const url = `http://localhost/00-planejamento/apiphp/alunos/${aluno.id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify( aluno )
    };
  
    fetch(url, options )
  }
  
    const aluno = {
      "id":"5",
      "nome": "Cleyde Gomes da Silva"
      "email": "cleydegomes@gmail.com",
  };
  
  updateAluno(aluno);

  -------------------------- DELETE -----------------------------
   function deleteAluno( alunoId ) {
    const url = `http://localhost/00-planejamento/apiphp/alunos/${alunoId}`;
    const options = {
      method: 'DELETE'
    };
  
    fetch(url, options )
  }
  
deleteAluno( 5 );
 */