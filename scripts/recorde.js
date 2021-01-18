function loadRecord(){
    
    
    if( localStorage.getItem("record") != null &&
        localStorage.getItem("record") != undefined ){

       // let ranking1 = JSON.parse(localStorage.getItem("record"))

        document.getElementById("container_do_record").innerHTML =
        `<h5>Record --> ${ranking[0].record} do usuário ${ranking[0].nomeDoJogador}</h5>`
        
    }
}

function novoRecord(){
    let nome = prompt("Qual o Seu Nome?");
    let pontuacaoFinal = prompt("Digite sua pontuação")
    let agora = Date.now();

    

        let novoRecord = {
            timestamp : agora,
            nomeDoJogador: nome,
            record: pontuacaoFinal
        }
        
        
        
        
        localStorage.setItem("record", stnovoRecord)
        
        // ranking = [
            //    {   },
            //    {   },
            //    {   },
            //]
            
            
            
            ranking.unshift(localStorage.getItem("record"))
            localStorage.setItem("record", ranking)
            loadRecord()
            
    
            
}


var ranking = [

    {
        record : 0
        
        
    },
    {
        
        record : 0
        
    },
]

function remove(){
    localStorage.removeItem("record")
}