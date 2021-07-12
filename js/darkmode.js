const checkbox = document.querySelector(".inputcheckbox");
const formulario = document.querySelector(".formulario");
const formulario2 = document.querySelector(".formulario2");
const div = document.querySelectorAll(".caixas>div");
const divmodal = document.querySelector(".content");
const h1 = document.querySelectorAll("h1");
const p = document.querySelectorAll("p");
const ptodo = document.querySelector("#artigo>li>p");
const slider = document.querySelector(".slider");
const botaomais = document.querySelector(".botaoEnviar");
const article = document.querySelectorAll("article");


function toggletrue(){
    
    if(checkbox.checked == true){
      body.classList.add("bodydark");
      formulario.classList.add("formulariodark"); 
      formulario2.classList.add("formulario2dark");
      botaomais.src = "./assets/Botaomaisdark.png"; 
      divmodal.classList.add("divdark");
      slider.classList.add("sliderdark");
      limpar.classList.add("Limpardark");
      body.classList.add("backgroundimagedark");

      for (var i = 0; i<div.length; i++){
          div[i].classList.add("divdark");
      }
      
      for (var i = 0; i<article.length; i++){
        article[i].classList.add("lidark");

        if(i==2){
          article[i].classList.add("li2dark");
        }
      }

      for (var i = 0; i<p.length; i++){
        p[i].classList.add("pdark");
      }

      for (var i = 0; i<h1.length; i++){
        h1[i].classList.add("h1dark");
      }
      

    }

    else{

      body.classList.remove("bodydark");
      formulario.classList.remove("formulariodark");  
      formulario2.classList.remove("formulario2dark");
      botaomais.src = "./assets/BotaoMais.png"; 
      divmodal.classList.remove("divdark");
      slider.classList.remove("sliderdark");
      limpar.classList.remove("Limpardark");
      body.classList.remove("backgroundimagedark");

      for (var i = 0; i<div.length; i++){
        div[i].classList.remove("divdark");
      }

      for (var i = 0; i<article.length; i++){
        article[i].classList.remove("lidark");

        if(i==2){
          article[i].classList.remove("li2dark");
        }
      }
     
      for (var i = 0; i<p.length; i++){
        p[i].classList.remove("pdark");
      }

      for (var i = 0; i<h1.length; i++){
        h1[i].classList.remove("h1dark");
      }


    }
}
