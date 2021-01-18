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
var contador = 0


//Bloco de função para os botões respostas da questão 1
function q1_correta(){
    
    

    document.getElementById("q1_op_4").style.background = "green"
    document.getElementById("q1_op_4").style.borderColor = "green"
    document.getElementById("q1_op_4").style.color = "white"
    
    contador +=70
    questao1 = 70
    console.log("Clicou na certa pontos ---> ", questao1)
    document.getElementById("pontuacao_atual").textContent = questao1 
    document.getElementById("pontuacao_total").textContent = contador
    
    
        
    
}


function q1_errada(x){
    document.getElementById(x).style.background = "red"
    document.getElementById(x).style.borderColor = "red"
    document.getElementById(x).style.color = "white"
    questao1 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao1 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
}


//Bloco de função para os botões respostas da questão 1


//Bloco de função para os botões respostas da questão 2

function q2_correta(){
    document.getElementById("q2_op_2").style.background = "green"
    document.getElementById("q2_op_2").style.borderColor = "green"
    document.getElementById("q2_op_2").style.color = "white"

     contador += 70
     questao2 = 70
    console.log("Clicou na certa pontos ---> ", questao2)
    document.getElementById("pontuacao_atual").textContent = questao2 
    document.getElementById("pontuacao_total").textContent = contador
    
    
   
    
}

function q2_errada(y){
    document.getElementById(y).style.background = "red"
    document.getElementById(y).style.borderColor = "red"
    document.getElementById(y).style.color = "white"
    
    questao2 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao2 
    document.getElementById("pontuacao_total").textContent = contador
    
    
}


//Bloco de função para os botões respostas da questão 2


//Bloco de função para os botões respostas da questão 3
function q3_correta(){
    document.getElementById("q3_op_1").style.background = "green"
    document.getElementById("q3_op_1").style.borderColor = "green"
    document.getElementById("q3_op_1").style.color = "white"

     contador += 50
     questao3 = 50
    console.log("Clicou na certa pontos ---> ", questao3)
    document.getElementById("pontuacao_atual").textContent = questao3 
    document.getElementById("pontuacao_total").textContent =  contador
   
    
   
    
}

function q3_errada(w){
    document.getElementById(w).style.background = "red"
    document.getElementById(w).style.borderColor = "red"
    document.getElementById(w).style.color = "white"
     questao3 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao3 
    document.getElementById("pontuacao_total").textContent = contador
   
    
}


//Bloco de função para os botões respostas da questão 3

//Bloco de função para os botões respostas da questão 4
function q4_correta(){
    document.getElementById("q4_op_1").style.background = "green"
    document.getElementById("q4_op_1").style.borderColor = "green"
    document.getElementById("q4_op_1").style.color = "white"

     contador += 50
     questao4 = 50
    console.log("Clicou na certa pontos ---> ", questao4)
    document.getElementById("pontuacao_atual").textContent = questao4 
    document.getElementById("pontuacao_total").textContent = contador
   
    
   
    
}

function q4_errada(z){
    document.getElementById(z).style.background = "red"
    document.getElementById(z).style.borderColor = "red"
    document.getElementById(z).style.color = "white"
     questao4 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao4 
    document.getElementById("pontuacao_total").textContent = contador
   
    
}


//Bloco de função para os botões respostas da questão 4

//Bloco de função para os botões respostas da questão 5
function q5_correta(){
    document.getElementById("q5_op_3").style.background = "green"
    document.getElementById("q5_op_3").style.borderColor = "green"
    document.getElementById("q5_op_3").style.color = "white"

     contador += 30
     questao5 = 30
    console.log("Clicou na certa pontos ---> ", questao5)
    document.getElementById("pontuacao_atual").textContent = questao5 
    document.getElementById("pontuacao_total").textContent = contador
   
    
   
    
}

function q5_errada(a){
    document.getElementById(a).style.background = "red"
    document.getElementById(a).style.borderColor = "red"
    document.getElementById(a).style.color = "white"
     questao5 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao4 
    document.getElementById("pontuacao_total").textContent = contador
   
    
}
//Bloco de função para os botões respostas da questão 5


//Bloco de função para os botões respostas da questão 6

function q6_correta(){
    document.getElementById("q6_op_2").style.background = "green"
    document.getElementById("q6_op_2").style.borderColor = "green"
    document.getElementById("q6_op_2").style.color = "white"
    
    contador += 30
    questao6 = 30
    console.log("Clicou na certa pontos ---> ", questao7)
    document.getElementById("pontuacao_atual").textContent = questao7 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
    
}

function q6_errada(b){
    document.getElementById(b).style.background = "red"
    document.getElementById(b).style.borderColor = "red"
    document.getElementById(b).style.color = "white"
    questao6 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao6 
    document.getElementById("pontuacao_total").textContent = contador
    
}
//Bloco de função para os botões respostas da questão 6


//Bloco de função para os botões respostas da questão 7
function q7_correta(){
    document.getElementById("q7_op_1").style.background = "green"
    document.getElementById("q7_op_1").style.borderColor = "green"
    document.getElementById("q7_op_1").style.color = "white"
    
    contador += 30
    questao7 = 30
    console.log("Clicou na certa pontos ---> ", questao7)
    document.getElementById("pontuacao_atual").textContent = questao7 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
    
}

function q7_errada(c){
    document.getElementById(c).style.background = "red"
    document.getElementById(c).style.borderColor = "red"
    document.getElementById(c).style.color = "white"
    questao7 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao7 
    document.getElementById("pontuacao_total").textContent = contador
    
}
//Bloco de função para os botões respostas da questão 7


//Bloco de função para os botões respostas da questão 8
function q8_correta(){
    document.getElementById("q8_op_3").style.background = "green"
    document.getElementById("q8_op_3").style.borderColor = "green"
    document.getElementById("q8_op_3").style.color = "white"
    
    contador += 20
    questao8 = 20
    console.log("Clicou na certa pontos ---> ", questao8)
    document.getElementById("pontuacao_atual").textContent = questao8 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
    
}

function q8_errada(d){
    document.getElementById(d).style.background = "red"
    document.getElementById(d).style.borderColor = "red"
    document.getElementById(d).style.color = "white"
    questao8 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao8 
    document.getElementById("pontuacao_total").textContent = contador
    
}
//Bloco de função para os botões respostas da questão 8


//Bloco de função para os botões respostas da questão 9
function q9_correta(){
    document.getElementById("q9_op_1").style.background = "green"
    document.getElementById("q9_op_1").style.borderColor = "green"
    document.getElementById("q9_op_1").style.color = "white"
    
    contador += 20
    questao9 = 20
    console.log("Clicou na certa pontos ---> ", questao9)
    document.getElementById("pontuacao_atual").textContent = questao9 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
    
}

function q9_errada(e){
    document.getElementById(e).style.background = "red"
    document.getElementById(e).style.borderColor = "red"
    document.getElementById(e).style.color = "white"
    questao9 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao9 
    document.getElementById("pontuacao_total").textContent = contador
    
}
//Bloco de função para os botões respostas da questão 9


//Bloco de função para os botões respostas da questão 10
function q10_correta(){
    document.getElementById("q10_op_4").style.background = "green"
    document.getElementById("q10_op_4").style.borderColor = "green"
    document.getElementById("q10_op_4").style.color = "white"
    
    contador += 10
    questao10 = 10
    console.log("Clicou na certa pontos ---> ", questao10)
    document.getElementById("pontuacao_atual").textContent = questao10 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
    
}

function q10_errada(f){
    document.getElementById(f).style.background = "red"
    document.getElementById(f).style.borderColor = "red"
    document.getElementById(f).style.color = "white"
    questao10 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao10 
    document.getElementById("pontuacao_total").textContent = contador
    
}
//Bloco de função para os botões respostas da questão 10


//Bloco de função para os botões respostas da questão 11
function q11_correta(){
    document.getElementById("q11_op_1").style.background = "green"
    document.getElementById("q11_op_1").style.borderColor = "green"
    document.getElementById("q11_op_1").style.color = "white"
    
    contador += 10
    questao11 = 10
    console.log("Clicou na certa pontos ---> ", questao11)
    document.getElementById("pontuacao_atual").textContent = questao11 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
    
}

function q11_errada(g){
    document.getElementById(g).style.background = "red"
    document.getElementById(g).style.borderColor = "red"
    document.getElementById(g).style.color = "white"
    questao11 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao11 
    document.getElementById("pontuacao_total").textContent = contador
    
}
//Bloco de função para os botões respostas da questão 11

//Bloco de função para os botões respostas da questão 12
function q12_correta(){
    document.getElementById("q12_op_3").style.background = "green"
    document.getElementById("q12_op_3").style.borderColor = "green"
    document.getElementById("q12_op_3").style.color = "white"
    
    contador += 10
    questao12 = 10
    console.log("Clicou na certa pontos ---> ", questao12)
    document.getElementById("pontuacao_atual").textContent = questao12 
    document.getElementById("pontuacao_total").textContent = contador
    
    
    
    
}

function q12_errada(h){
    document.getElementById(h).style.background = "red"
    document.getElementById(h).style.borderColor = "red"
    document.getElementById(h).style.color = "white"
    questao12 = 0
    console.log("clicou na errada")
    document.getElementById("pontuacao_atual").textContent = questao12 
    document.getElementById("pontuacao_total").textContent = contador
    
}
//Bloco de função para os botões respostas da questão 12