"use strict";

const notas = [ 2, 8, 5, 0, 8 ];

const clientes = [
    { "nome": "João", "idade": 19, "cidade": "Barueri" },
    { "nome": "Fernando", "idade": 43, "cidade": "São Roque" },
    { "nome": "Maria", "idade": 31, "cidade": "Jandira" },
    { "nome": "Jefferson", "idade": 15, "cidade": "Osasco" }
]

/*  map - Retorna um novo array do mesmo tamanho, modificado ou não.
        argumentos do callback:
            1º elemento
            2º índice
            3º array

    filter - Retorna um novo array filtrado pela condição.
        argumentos do callback:
            1º elemento
            2º índice
            3º array

    reduce - Retorna um único valor.
        argumentos do callback:
            1º acumulador
            2º elemento
            3º índice
            4º array
*/
const notasAtualizadas = notas.map( nota => nota * 10 );
const notasAcimaDaMedia = notas.filter( nota => nota >= 5 );
const notasTotal = notas.reduce( ( acc, nota ) => acc + nota , 0 );
const notasMedia = notas.reduce( ( acc, nota ) => acc + nota, 0 ) / notas.length;

const exibirDados = ( elemento, cliente ) => {
    // <div class="card">
    //     <div class="titulo">
    //         ${titulo}
    //     </div>
    //     <div>
    //         ${arr}
    //     </div>
    // </div>

    elemento.innerHTML += `
 
        <div class="card text-white bg-dark mb-3" style="max-width: 12rem;">
        <div class="card-header">${cliente.nome}</div>
        <div class="card-body">
            <p class="card-text">
                <div class="titulo">
                    Idade: ${cliente.idade}
                </div>

                <div class="titulo">
                    Cidade: ${cliente.cidade}
                </div>
            </p>
        </div>
        </div>
    `;
}

const $resultados = document.getElementById( 'resultados' );

clientes.forEach( ( cliente ) => exibirDados( $resultados, cliente ) );