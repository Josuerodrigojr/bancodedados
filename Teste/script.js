const dados01 = [];
const letraadv01 = [];

function cadastrar() {
    // entrada:
    const usuario = document.getElementById("usuario");
    const email = document.getElementById("email");    

    //processamento:
    const dados = {
        usuario: usuario.value,
        email: email.value
    };

    console.log(dados);
    dados01.push(dados);

    // saída:
   console.table(dados01);

   // limpar a saída
    usuario.value= '';
    email.value = '';    
};


let listaDinamica = [];
let palavraSecretaCategoria;


const palavras = [
    palavra001={
        nome : "ABACATE",
        categoria : "FRUTAS"
    },
    palavra002={
        nome : "MEXERICA",
        categoria : "FRUTAS"
    },
    palavra003={
        nome : "CAQUI",
        categoria : "FRUTAS"
    },
    palavra004={
        nome : "MANGA",
        categoria : "FRUTAS"
    },
    palavra005={
        nome : "AMEIXA",
        categoria : "FRUTAS"
    },
    palavra006={
        nome : "CEREJA",
        categoria : "FRUTAS"
    },
    palavra007={
        nome : "ABACAXI",
        categoria : "FRUTAS"
    },
    palavra008={
        nome : "LICHIA",
        categoria : "FRUTAS"
    },
    palavra009={
        nome : "ACEROLA",
        categoria : "FRUTAS"
    },
    palavra010={
        nome : "AÇAI",
        categoria : "FRUTAS"
    },
    palavra011={
        nome : "MIRTILO",
        categoria : "FRUTAS"
    },
    palavra012={
        nome : "LARANJA",
        categoria : "FRUTAS"
    },
    palavra013={
        nome : "FRAMBOESA",
        categoria : "FRUTAS"
    },
    palavra014={
        nome : "GOIABA",
        categoria : "FRUTAS"
    },
    palavra015={
        nome : "DAMASCO",
        categoria : "FRUTAS"
    },
    palavra016={
        nome : "GRAVIOLA",
        categoria : "FRUTAS"
    },
    palavra017={
        nome : "JABOTICABA",
        categoria : "FRUTAS"
    },
    palavra018={
        nome : "NECTARINA",
        categoria : "FRUTAS"
    },
    palavra019={
        nome : "CARAMBOLA",
        categoria : "FRUTAS"
    },
    palavra020={
        nome : "TAMARINDO",
        categoria : "FRUTAS"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela(); // aparece na tela a categoria e a palavra secreta. 
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML =" "; // apaguei a "palavraSecretaSorteada" para não aparecer mais na palavraSecretaSorteada 

    // para aparecer o espaço da forca:
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHtml = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i]+ "</div>"
            }
            else{
                palavraTela.innerHtml = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i]+ "</div>"
            }
    }           
} 