function loadRecord() {


    if (localStorage.getItem("record") != null &&
        localStorage.getItem("record") != undefined) {

        let ranking1 = JSON.parse(localStorage.getItem("record"))

        document.getElementById("container_do_record").innerHTML =
            `<h5>Record --> ${ranking1[0].record} do usuário ${ranking1[0].nomeDoJogador}</h5>`

    }
}

function novoRecord() {
    let nome = prompt("Qual o Seu Nome?");
    let pontuacaoFinal = parseInt(document.getElementById("pontuacao_total").textContent)
    let agora = Date.now();
    let ranking2 = JSON.parse(localStorage.getItem("record"))


    if (pontuacaoFinal > ranking[0].record) {

        let novoRecord = {
            timestamp: agora,
            nomeDoJogador: nome,
            record: pontuacaoFinal
        }




        localStorage.setItem("record", JSON.stringify(novoRecord))

        // ranking = [
        //    {   },
        //    {   },
        //    {   },
        //]



        ranking.unshift(JSON.parse(localStorage.getItem("record")))
        localStorage.setItem("record", JSON.stringify(ranking))
        loadRecord()

    }


}


var ranking = [

    {
        nomeDoJogador: "Atilas",
        record: 0
    },

  

]

function remove() {
    localStorage.removeItem("record")
}

function novo_Jogo(){
    contador = 0
    document.getElementById("pontuacao_total").textContent = 0
    document.getElementById("pontuacao_atual").textContent = 0
   // pergunta1()
    
     document.getElementById("conteudo_principal").innerHTML =
    ` <section id="container_questionario_pontuacao_score">
    <!--Contem a parte da pergunta, da pontuação e do High score-->
    
    <article id="container_questionario">
        <!--Container da pergunta com imagens e respostas-->
        <div id="container_titulo">
            <h1>Questionário de Filmes</h1>

        </div>

        <div id="container_mensagem">
            <h2>Bem-vindo ao quiz sobre filmes ! <br>escolha uma das perguntas abaixo aleatoriamente ou <br>clique no botão para iniciar o jogo
            </h2>
            <button class="botao_pontuacao" onclick="pergunta1()">iniciar</button>
        </div>

    </article>
   
        
        
        
    
    <article id="container_pontuacao_score">
        <!--Container da pontuação e High score-->

        <article id="container_pontuacao">
            <!--Container da pontuação-->
            <div class="card_pontuacao">
                <h4>Pontuação Atual :</h4>
                <span id="pontuacao_atual"><strong></strong></span>
            </div>

            

            <div class="card_pontuacao"> 
                <h4>Pontuação total :</h4>
                <span id="pontuacao_total"><strong></strong></span>
            </div>

        </article>

        <article id="container_score">
            <!--Container do High score-->
            <div id="container_botao_pontuacao">
                <button class="botao_pontuacao" onclick="novoRecord()">Recorde</button>
                <button class="botao_pontuacao">Ranking</button>
                <button class="botao_pontuacao" onclick="novo_Jogo()">Novo Jogo</button>
                <button class="botao_pontuacao" onclick="remove()"></button>

            </div>

            <div id="container_do_record"></div>

        </article>
    </article>

</section>

<section id="container_cards">
    <!--Contem os cards de perguntas-->
    <div class="card">
        <button class="botao_card" id="botao_card_1" onclick="pergunta1()">
            Pergunta 1
            <div class="valor_card" >
                +70
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card"  id="botao_card_2" onclick="pergunta2()">
            Pergunta 2
            <div class="valor_card" >
                +70
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card"  id="botao_card_3" onclick="pergunta3()">
            Pergunta 3
            <div class="valor_card" >
                +50
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card"  id="botao_card_4" onclick="pergunta4()">
            Pergunta 4
            <div class="valor_card" >
                +50
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_5" onclick="pergunta5()">
            Pergunta 5
            <div class="valor_card" >
                +30
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_6" onclick="pergunta6()">
            Pergunta 6
            <div class="valor_card" >
                +30
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_7" onclick="pergunta7()">
            Pergunta 7
            <div class="valor_card" >
                +30
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_8" onclick="pergunta8()">
            Pergunta 8
            <div class="valor_card" >
                +20
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_9" onclick="pergunta9()">
            Pergunta 9
            <div class="valor_card" >
                +20
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_10" onclick="pergunta10()">
            Pergunta 10
            <div class="valor_card" >
                +10
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_11" onclick="pergunta11()">
            Pergunta 11
            <div class="valor_card">
                +10
            </div>
        </button>
    </div>

    <div class="card">
        <button class="botao_card" id="botao_card_12" onclick="pergunta12()">
            Pergunta 12
            <div class="valor_card" >
                +10
            </div>
        </button>
    </div>

</section>` 
}