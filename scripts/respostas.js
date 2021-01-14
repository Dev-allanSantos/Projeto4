var questao1 = 0
var questao2 = 0
var questao3 = 0
var questao4 = 0
var questao5 = 0
var questao6 = 0
var questao7 = 0
var questao8 = 0
var questao9 = 0
var questao10 = 0
var questao11 = 0
var questao12 = 0


//Bloco de função para os botões respostas da questão 1
function q1_correta(){
    document.getElementById("q1_op_4").style.background = "green"
    document.getElementById("q1_op_4").style.borderColor = "green"
    document.getElementById("q1_op_4").style.color = "white"
    
    
    questao1 = 70
    console.log("Clicou na certa pontos ---> ", questao1)
    document.getElementById("pontuacao_atual").textContent = questao1 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
    
}

function q1_errada1(){
    document.getElementById("q1_op_1").style.background = "red"
    document.getElementById("q1_op_1").style.borderColor = "red"
    document.getElementById("q1_op_1").style.color = "white"
    questao1 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao1 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
    
}

function q1_errada2(){
    document.getElementById("q1_op_2").style.background = "red"
    document.getElementById("q1_op_2").style.borderColor = "red"
    document.getElementById("q1_op_2").style.color = "white"
    questao1 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao1 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}

function q1_errada3(){
    document.getElementById("q1_op_3").style.background = "red"
    document.getElementById("q1_op_3").style.borderColor = "red"
    document.getElementById("q1_op_3").style.color = "white"
    questao1 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao1
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
     
}

//Bloco de função para os botões respostas da questão 2

function q2_correta(){
    document.getElementById("q2_op_2").style.background = "green"
    document.getElementById("q2_op_2").style.borderColor = "green"
    document.getElementById("q2_op_2").style.color = "white"

    
     questao2 = 70
    console.log("Clicou na certa pontos ---> ", questao2)
    document.getElementById("pontuacao_atual").textContent = questao2 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
   
    
}

function q2_errada1(){
    document.getElementById("q2_op_1").style.background = "red"
    document.getElementById("q2_op_1").style.borderColor = "red"
    document.getElementById("q2_op_1").style.color = "white"
     questao2 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao2 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}

function q2_errada2(){
    document.getElementById("q2_op_3").style.background = "red"
    document.getElementById("q2_op_3").style.borderColor = "red"
    document.getElementById("q2_op_3").style.color = "white"
     questao2 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao2 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}

function q2_errada3(){
    document.getElementById("q2_op_4").style.background = "red"
    document.getElementById("q2_op_4").style.borderColor = "red"
    document.getElementById("q2_op_4").style.color = "white"
     questao2 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao2 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}