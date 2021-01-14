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

function q1_errada(x){
    document.getElementById(x).style.background = "red"
    document.getElementById(x).style.borderColor = "red"
    document.getElementById(x).style.color = "white"
    questao1 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao1 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
    
}


//Bloco de função para os botões respostas da questão 1


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

function q2_errada(y){
    document.getElementById(y).style.background = "red"
    document.getElementById(y).style.borderColor = "red"
    document.getElementById(y).style.color = "white"
     questao2 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao2 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}


//Bloco de função para os botões respostas da questão 2


//Bloco de função para os botões respostas da questão 3
function q3_correta(){
    document.getElementById("q3_op_1").style.background = "green"
    document.getElementById("q3_op_1").style.borderColor = "green"
    document.getElementById("q3_op_1").style.color = "white"

    
     questao3 = 50
    console.log("Clicou na certa pontos ---> ", questao3)
    document.getElementById("pontuacao_atual").textContent = questao3 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
   
    
}

function q3_errada(w){
    document.getElementById(w).style.background = "red"
    document.getElementById(w).style.borderColor = "red"
    document.getElementById(w).style.color = "white"
     questao3 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao3 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}

function q3_errada2(){
    document.getElementById("q3_op_3").style.background = "red"
    document.getElementById("q3_op_3").style.borderColor = "red"
    document.getElementById("q3_op_3").style.color = "white"
     questao3 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao3 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}

function q3_errada3(){
    document.getElementById("q3_op_4").style.background = "red"
    document.getElementById("q3_op_4").style.borderColor = "red"
    document.getElementById("q3_op_4").style.color = "white"
     questao3 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao3 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}
//Bloco de função para os botões respostas da questão 3

//Bloco de função para os botões respostas da questão 4
function q4_correta(){
    document.getElementById("q3_op_1").style.background = "green"
    document.getElementById("q3_op_1").style.borderColor = "green"
    document.getElementById("q3_op_1").style.color = "white"

    
     questao4 = 50
    console.log("Clicou na certa pontos ---> ", questao4)
    document.getElementById("pontuacao_atual").textContent = questao4 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
   
    
}

function q4_errada1(){
    document.getElementById("q3_op_2").style.background = "red"
    document.getElementById("q3_op_2").style.borderColor = "red"
    document.getElementById("q3_op_2").style.color = "white"
     questao4 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao4 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}

function q4_errada2(){
    document.getElementById("q3_op_3").style.background = "red"
    document.getElementById("q3_op_3").style.borderColor = "red"
    document.getElementById("q3_op_3").style.color = "white"
     questao4 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao4 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}

function q4_errada3(){
    document.getElementById("q3_op_4").style.background = "red"
    document.getElementById("q3_op_4").style.borderColor = "red"
    document.getElementById("q3_op_4").style.color = "white"
     questao3 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao3 
    document.getElementById("pontuacao_total").textContent = 
    questao1 + questao2 + questao3 + questao4 + questao5 + questao6 + questao7 + questao8 + questao9 + questao10 + questao11 + questao12
    
}
//Bloco de função para os botões respostas da questão 4