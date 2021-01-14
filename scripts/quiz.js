var deck = [

    {   
        imagem : "../images/Homem_mosca.jpg",
        altura : "250px",
        largura :"410px",
        pergunta:"Esta Cena corresponde a qual filme ?",
        resposta : ["Vinhas da Ira", "O Relojoeiro", "Lista de Schindler", "O Homem Mosca"],
        resultado : 70 
    },

    {
        imagem : "../images/Here´s Jonhy.jpg",
        pergunta : "Qual é a frase icônica dita por Jack Torrance nesta Cena ?",
        resposta : ["Abre a porta aqui, na moral", "Aqui está o Jonhy", "Achei você", "Tem açucar aí ?"],
        resultado : 70
    },
]

function pergunta1(){
    document.getElementById("container_questionario").innerHTML =
    `
    <div id="container_imagem">
    
    <img src="${deck[0].imagem}" alt="paisagem" width="${deck[0]}" height="${}">
  </div>
  
  <div id="container_pergunta">
    
      <p>${deck[0].pergunta} </p>
</div>

<div id="container_respostas">
  
  
  <div class="cards_respostas">
      <button class="botao_respostas" id="op_1" onclick="opcao1()">${deck[0].resposta[0]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="op_2" onclick="opcao2()">${deck[0].resposta[1]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="op_3" onclick="opcao3()">${deck[0].resposta[2]}</button>
  </div>
  
  <div class="cards_respostas">
      <button  class="botao_respostas" id="op_4" onclick="opcao4()">${deck[0].resposta[3]}</button>
  </div>
</div>`
}