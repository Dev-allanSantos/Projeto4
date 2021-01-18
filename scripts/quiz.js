var deck = [

    {   //Pergunta 1
        imagem : "../images/Homem_mosca.jpg",
        altura : "270px",
        largura :"75%",
        pergunta:"Esta cena pertence a qual filme ?",
        resposta : ["Vinhas da Ira", "O Relojoeiro", "Lista de Schindler", "O Homem Mosca"],
        resultado : 70 
    },

    {
      //Pergunta 2
        imagem : "../images/Here´s Jonhy.jpg",
        pergunta : "Qual é a frase icônica dita por Jack Torrance nesta cena ?",
        resposta : ["Abre a porta aqui, na moral", "Aqui está o Jonhy", "Achei você", "Tem açucar aí ?"],
        resultado : 70
    },

    {
      //pergunta 3
        imagem : "../images/clube_da_luta.jpg",
        pergunta : "Qual é a primeira regra do clube da luta ? ",
        resposta : ["Não falar sobre o clube da Luta", "Não nocautear os oponentes", "usar proteção bucal", "Não faltar as lutas"],
        resultado : 50

    },

    {
      //pergunta 4
        imagem : "../images/Titanic_1.jpg",
        pergunta : "Em que ano foi criado o filme Titanic de James Cameron?",
        resposta : [1997, 2008, 1995, 1980],
        resultado : 50  
    },

    {
      //pergunta 5
        imagem : "../images/estatueta.jpg",
        pergunta : "Quantos oscars o filme Titanic Ganhou ?",
        resposta : [10,7,11,12],
        resultado : 30
    },

    {
      //pergunta 6
        imagem : "../images/Darth_vader.jpg",
        pergunta : "O que Darth Vader fala para Luke Skywalker nesta cena ?",
        resposta : ["Voce nunca vencerá", "Luke, eu sou seu pai", "Venha para o lado Negro da força", "Eu vou te  matar"],
        resultado : 30
    },

    {
      //Pergunta 7
      imagem : "../images/indiana_jones.jpg",
      pergunta : "Esta cena pertence a qual filme ? ",
      resposta : ["Indiana Jones", "Missão Impossível", "Lost", "Perdidos na floresta"],
      resultado : 30
    },

    {
      //Pergunta 8
      imagem : "../images/donnie_darko.png",
      pergunta : "Em que ano foi lançado o filme Donnie Darko ?",
      resposta : [2006,2002,2001,2004],
      resultado: 20
    },

    {
      //Pergunta 9
      imagem : "../images/mad_max.jpg",
      pergunta : "Qual é o nome desse personagem de Mad Max ?",
      resposta : ["Max Rockatansky", "Mudguts", "Johny o garoto", "Toddler"],
      resultado : 20
    },

    {
      //Pergunta10
      imagem : "../images/boyhood.jpg",
      pergunta : "Quanto tempo durou a produção do filme 'Boyhood da infância a juventude' ?",
      resposta : ["7 meses", "1 ano e 5 meses", "11 meses", "12 anos"],
      resultado : 10
    },
    
    {
      //Pergunta11
      imagem : "../images/avatar.jpg",
      pergunta : "O filme avatar arrecadou 2.7 bilhões de dólares :",
      resposta : ["Verdadeiro", "Falso"],
      resultado : 10
    },
    
    {
      //Pergunta12
      imagem : "../images/star_trek.jpg",
      pergunta : "Este personagem pertence a qual filme ?",
      resposta : ["2001: uma odisseia no espaço", "Perdido em Marte", "Star Trek", "Star Wars"],
      resultado : 10
    },





]

function pergunta1(){
    document.getElementById("container_questionario").innerHTML =
    `
    <div id="container_titulo">
    
        <h1>Questionário de Filmes</h1>

    </div>
    
    <div id="container_imagem">
    
        <img src="${deck[0].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
    </div>
  
  <div id="container_pergunta">
    
      <p>${deck[0].pergunta} </p>
</div>

<div id="container_respostas">
  
  
  <div class="cards_respostas">
      <button class="botao_respostas" id="q1_op_1" onclick="q1_errada(x= 'q1_op_1')">${deck[0].resposta[0]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="q1_op_2" onclick="q1_errada(x = 'q1_op_2')">${deck[0].resposta[1]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="q1_op_3" onclick="q1_errada(x = 'q1_op_3')">${deck[0].resposta[2]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="q1_op_4" onclick="q1_correta()">${deck[0].resposta[3]}</button>
  </div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta2()">Próximo</button>
</div>`
}

function pergunta2(){
    document.getElementById("container_questionario").innerHTML =
    ` <div id="container_titulo">
    
    <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

    <img src="${deck[1].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

  <p>${deck[1].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
  <button class="botao_respostas" id="q2_op_1" onclick="q2_errada(y = 'q2_op_1')">${deck[1].resposta[0]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q2_op_2" onclick="q2_correta()">${deck[1].resposta[1]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q2_op_3" onclick="q2_errada(y = 'q2_op_3')">${deck[1].resposta[2]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q2_op_4" onclick="q2_errada(y = 'q2_op_4')">${deck[1].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta3()">Próximo</button>
</div>
`
}

function pergunta3(){
    document.getElementById("container_questionario").innerHTML =
    ` <div id="container_titulo">
    
    <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

    <img src="${deck[2].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

  <p>${deck[2].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
  <button class="botao_respostas" id="q3_op_1" onclick="q3_correta()">${deck[2].resposta[0]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q3_op_2" onclick="q3_errada(w = 'q3_op_2')">${deck[2].resposta[1]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q3_op_3" onclick="q3_errada(w = 'q3_op_3')">${deck[2].resposta[2]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q3_op_4" onclick="q3_errada(w = 'q3_op_4')">${deck[2].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta4()">Próximo</button>
</div>`
}

function pergunta4(){
    document.getElementById("container_questionario").innerHTML =
    ` <div id="container_titulo">
    
    <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

    <img src="${deck[3].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

  <p>${deck[3].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
  <button class="botao_respostas" id="q4_op_1" onclick="q4_correta()">${deck[3].resposta[0]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q4_op_2" onclick="q4_errada(z = 'q4_op_2')">${deck[3].resposta[1]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q4_op_3" onclick="q4_errada(z = 'q4_op_3')">${deck[3].resposta[2]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q4_op_4" onclick="q4_errada(z = 'q4_op_4')">${deck[3].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta5()">Próximo</button>
</div>`
}

function pergunta5(){
    document.getElementById("container_questionario").innerHTML =
    ` <div id="container_titulo">
    
    <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

    <img src="${deck[4].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

  <p>${deck[4].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
  <button class="botao_respostas" id="q5_op_1" onclick="q5_errada(a = 'q5_op_1')">${deck[4].resposta[0]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q5_op_2" onclick="q5_errada(a = 'q5_op_2')">${deck[4].resposta[1]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q5_op_3" onclick="q5_correta()">${deck[4].resposta[2]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q5_op_4" onclick="q5_errada(a = 'q5_op_4')">${deck[4].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta6()">Próximo</button>
</div>`
}

function pergunta6(){
  document.getElementById("container_questionario").innerHTML =
  ` <div id="container_titulo">
  
  <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

  <img src="${deck[5].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

<p>${deck[5].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
<button class="botao_respostas" id="q6_op_1" onclick="q6_errada(b = 'q6_op_1')">${deck[5].resposta[0]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q6_op_2" onclick="q6_correta()">${deck[5].resposta[1]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q6_op_3" onclick="q6_errada(b = 'q6_op_3')">${deck[5].resposta[2]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q6_op_4" onclick="q6_errada(b = 'q6_op_4')">${deck[5].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta7()">Próximo</button>
</div>`
}

function pergunta7(){
  document.getElementById("container_questionario").innerHTML =
  ` <div id="container_titulo">
  
  <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

  <img src="${deck[6].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

<p>${deck[6].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
<button class="botao_respostas" id="q7_op_1" onclick="q7_correta()">${deck[6].resposta[0]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q7_op_2" onclick="q7_errada(c = 'q7_op_2')">${deck[6].resposta[1]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q7_op_3" onclick="q7_errada(c = 'q7_op_3')">${deck[6].resposta[2]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q7_op_4" onclick="q7_errada(c = 'q7_op_4')">${deck[6].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta8()">Próximo</button>
</div>`
}


function pergunta8(){
  document.getElementById("container_questionario").innerHTML =
  ` <div id="container_titulo">
  
  <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

  <img src="${deck[7].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

<p>${deck[7].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
<button class="botao_respostas" id="q8_op_1" onclick="q8_errada(d = 'q8_op_1')">${deck[7].resposta[0]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q8_op_2" onclick="q8_errada(d = 'q8_op_2')">${deck[7].resposta[1]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q8_op_3" onclick="q8_correta()">${deck[7].resposta[2]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q8_op_4" onclick="q8_errada(d = 'q8_op_4')">${deck[7].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta9()">Próximo</button>
</div>`
}


function pergunta9(){
  document.getElementById("container_questionario").innerHTML =
  ` <div id="container_titulo">
  
  <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

  <img src="${deck[8].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

<p>${deck[8].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
<button class="botao_respostas" id="q9_op_1" onclick="q9_correta()">${deck[8].resposta[0]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q9_op_2" onclick="q9_errada(e = 'q9_op_2')">${deck[8].resposta[1]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q9_op_3" onclick="q9_errada(e = 'q9_op_3')">${deck[8].resposta[2]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q9_op_4" onclick="q9_errada(e = 'q9_op_4')">${deck[8].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta10()">Próximo</button>
</div>`
}


function pergunta10(){
  document.getElementById("container_questionario").innerHTML =
  ` <div id="container_titulo">
  
  <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

  <img src="${deck[9].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

<p>${deck[9].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
<button class="botao_respostas" id="q10_op_1" onclick="q10_errada(f = 'q10_op_1')">${deck[9].resposta[0]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q10_op_2" onclick="q10_errada(f = 'q10_op_2')">${deck[9].resposta[1]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q10_op_3" onclick="q10_errada(f = 'q10_op_3')">${deck[9].resposta[2]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q10_op_4" onclick="q10_correta()">${deck[9].resposta[3]}</button>
</div>
</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta11()">Próximo</button>
</div>`
}

function pergunta11(){
  document.getElementById("container_questionario").innerHTML =
  ` <div id="container_titulo">
  
  <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

  <img src="${deck[10].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

<p>${deck[10].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
<button class="botao_respostas" id="q11_op_1" onclick="q11_correta()">${deck[10].resposta[0]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q11_op_2" onclick="q11_errada(g = 'q11_op_2')">${deck[10].resposta[1]}</button>
</div>

</div>

<div class="container_botao_proximo">
  <button class="botao_pontuacao" onclick="pergunta12()">Próximo</button>
</div>`

}

function pergunta12(){
  document.getElementById("container_questionario").innerHTML =
  ` <div id="container_titulo">
  
  <h1>Questionário de Filmes</h1>

</div>

<div id="container_imagem">

  <img src="${deck[11].imagem}" alt="paisagem" width="${deck[0].largura}" height="${deck[0].altura}">
</div>

<div id="container_pergunta">

<p>${deck[11].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
<button class="botao_respostas" id="q12_op_1" onclick="q12_errada(h = 'q12_op_1')">${deck[11].resposta[0]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q12_op_2" onclick="q12_errada(h = 'q12_op_2')">${deck[11].resposta[1]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q12_op_3" onclick="q12_correta()">${deck[11].resposta[2]}</button>
</div>

<div class="cards_respostas">
<button  class="botao_respostas" id="q12_op_4" onclick="q12_errada(h = 'q12_op_4')">${deck[11].resposta[3]}</button>
</div>
</div>`
}