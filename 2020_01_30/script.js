const $calcular = document.getElementById( 'calcular' );

const calcular = () => delegarConceito(verificaSituacao);

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

const verificaSituacao = () => {
    const $nome = document.getElementById( 'nome' );
    const nota1 = parseFloat(document.getElementById( 'nota1' ).value);
    const nota2 = parseFloat(document.getElementById( 'nota2' ).value);
    const $media = document.getElementById( 'media' );
    const $situacao = document.getElementById( 'situacao' );

    const media = calcularMedia ( nota1, nota2 );

    console.log(nota1);

    if (media >= 5){
        $situacao.value = "Aprovado";
        $situacao.classList.remove( 'reprovado' );
        $situacao.classList.add( 'aprovado' );
    }
    else {
        $situacao.value = "Reprovado";
        $situacao.classList.remove( 'aprovado' );
        $situacao.classList.add( 'reprovado' );
    }
}

function delegarConceito( media ){
    const $conceito = document.getElementById( 'conceito' );

    if( media < 3 ){
        $conceito.value = "E";
    }
    else if( media < 5 ){
        $conceito.value = "D";
    }
    else if( media < 8 ){
        $conceito.value = "C";
    }
    else if( media < 10 ){
        $conceito.value = "B";
    }
    else {
        $conceito.value = "A";
    }
}

$calcular.addEventListener( 'click', calcular );

// const $nome = document.querySelector("#nome");

// const calcular2 = function (){
//     delegarConceito(calcularMedia);
// }

// const calcular3 = () => {
//     delegarConceito(calcularMedia);
// }
