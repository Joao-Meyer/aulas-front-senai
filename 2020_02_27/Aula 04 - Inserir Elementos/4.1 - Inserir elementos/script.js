"use strict";

const frutas = ['mamão', 'laranja', 'pera', 'melancia'];
const nomes = ['joão', 'maria', 'pedro', 'jorge'];
const dinossauros = ['tiranossauro rex', 'stegossauro', 'patassauro', 'velociraptor'];

const card = ( array, titulo="Lista" ) => {
    const $card = document.createElement( 'div' );
    $card.classList.add( 'card' );

    const elementos = array.join( "</li><li>" );

     $card.innerHTML = `
        <div class="card-title">${titulo}</div>

        <div class="card-body">
            <ul>
                <li>${elementos}</li>
            </ul>
        </div>
    `;

    return $card;
}

const $container = document.querySelector( '.conteiner' );

// appendChild adiciona o elemento

$container.appendChild( card( frutas, "frutas" ) );
$container.appendChild( card( nomes ) );
$container.appendChild( card( dinossauros, "dinossauros" ) );