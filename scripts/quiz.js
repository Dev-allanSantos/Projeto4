var deck = [

    {   
        imagem : "../images/Homem_mosca.jpg",
        altura : "270px",
        largura :"90%",
        pergunta:"Esta cena pertence a qual filme ?",
        resposta : ["Vinhas da Ira", "O Relojoeiro", "Lista de Schindler", "O Homem Mosca"],
        resultado : 70 
    },

    {
        imagem : "../images/Here´s Jonhy.jpg",
        pergunta : "Qual é a frase icônica dita por Jack Torrance nesta Cena ?",
        resposta : ["Abre a porta aqui, na moral", "Aqui está o Jonhy", "Achei você", "Tem açucar aí ?"],
        resultado : 70
    },

    {
        imagem : "../images/clube_da_luta.jpg",
        pergunta : "Qual é a primeira regra do clube da luta ? ",
        resposta : ["Não falar sobre o clube da Luta", "Não nocautear os oponentes", "usar proteção bucal", "Não faltar as lutas"],
        resultado : 50

    },

    {
        imagem : "../images/Titanic_1.jpg",
        pergunta : "Em que ano foi criado o filme Titanic de James Cameron?",
        resposta : [1997, 2008, 1995, 1980],
        resultado : 50  
    },

    {
        imagem : "../images/estatueta.jpg",
        pergunta : "Quantos oscars o filme Titanic Ganhou ?",
        resposta : [10,7,11,12],
        resultado : 30
    },

    {
        imagem : "../images/",
        pergunta : "O que Darth Vader fala para Luke Skywalker nesta cena ?",
        resposta : ["Voce nunca vencerá", "Luke, eu sou seu pai", "Venha para o lado Negro da força", "Eu vou te  matar"],
        resultado : 30
    }


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
</div>`
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
</div>`
}

