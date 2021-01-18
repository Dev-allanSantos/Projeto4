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
    pergunta1()
}