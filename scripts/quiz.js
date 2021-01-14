var deck = [

    {   
        imagem : "../images/Homem_mosca.jpg",
        altura : "270px",
        largura :"90%",
        pergunta:"Esta cena corresponde a qual filme ?",
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
      <button class="botao_respostas" id="q1_op_1" onclick="q1_errada1()">${deck[0].resposta[0]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="q1_op_2" onclick="q1_errada2()">${deck[0].resposta[1]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="q1_op_3" onclick="q1_errada3()">${deck[0].resposta[2]}</button>
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

    <img src="${deck[1].imagem}" alt="paisagem" width="${deck[1].largura}" height="${deck[1].altura}">
</div>

<div id="container_pergunta">

  <p>${deck[1].pergunta} </p>
</div>

<div id="container_respostas">


<div class="cards_respostas">
  <button class="botao_respostas" id="q2_op_1" onclick="q2_errada1()">${deck[1].resposta[0]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q2_op_2" onclick="q2_correta()">${deck[1].resposta[1]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q2_op_3" onclick="q2_errada2()">${deck[1].resposta[2]}</button>
</div>

<div class="cards_respostas">
  <button  class="botao_respostas" id="q2_op_4" onclick="q2_errada3()">${deck[1].resposta[3]}</button>
</div>
</div>`
}