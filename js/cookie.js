const buttonConcordo = document.querySelector(".concordo");
const buttonNaoconcordo = document.querySelector(".naoconcordo");
const rodape = document.querySelector(".Rodape");
const buttonfechar = document.querySelector(".botaoFechar");


buttonConcordo.addEventListener("click", (e)=>{

    rodape.style.display = "none";

    e.preventDefault;

    const backgroundcookie = Backgroundimg.value;
    const darkmodecookie = checkbox.checked;
    
    let data = new Date();
    let segundos = 3600;
    data.setTime(data.getTime() + (segundos*1000));

    document.cookie = `background=${backgroundcookie}; expires=${data.toUTCString()}`;
    document.cookie = `darkmode=${darkmodecookie}; expires=${data.toUTCString()}`;

    /* let auxtodo = false;
    let auxdoing = false;
    let auxdone = false; */

    document.cookie = `counttodo=${counttodo}; expires=${data.toUTCString()}`;
    document.cookie = `countdoing=${countdoing}; expires=${data.toUTCString()}`;
    document.cookie = `countdone=${countdone}; expires=${data.toUTCString()}`;

    
    if (counttodo>0){
      /* auxtodo = true; */
      document.cookie = `arrayTodo=${arrayCookie1}; expires=${data.toUTCString()}`;
    }

    if (countdoing>0){
      document.cookie = `arrayDoing=${arrayCookie2}; expires=${data.toUTCString()}`;
    }

    if (countdone>0){
      document.cookie = `arrayDone=${arrayCookie3}; expires=${data.toUTCString()}`;
    }

    // else{
    //   auxdoing = false;
    //   document.cookie = `arrayDoing=${auxdoing}; expires=${data.toUTCString()}`;
    // }

    // if (countdone>0){
    //   auxdone = true;
    //   document.cookie = `arrayDone=${auxdone}; expires=${data.toUTCString()}`;
    // }

    // else{
    //   auxdone = false;
    //   document.cookie = `arrayDone=${auxdone}; expires=${data.toUTCString()}`;
    // }

    // for(let i = 0; i<counttodo; i++){
    //     console.log(arrayCookie1[i]);
    // }

    

    // for(let i = 0; i<countdoing; i++){
    //     console.log(arrayCookie2[i]);
    // }

    // for(let i = 0; i<countdone; i++){
    //   console.log(arrayCookie3[i]);
    // }

    // refresh();

});

buttonfechar.addEventListener("click", (e)=>{
    e.preventDefault;
    rodape.style.display = "none";
});

buttonNaoconcordo.addEventListener("click", (e)=>{
    e.preventDefault;
    rodape.style.display = "none";
});

function refresh(){
    let meuCookie;

    try{
        meuCookie = document.cookie //Recebe os Cookies
        .split('; ')    //Separa eles por ;
        .find(item => item.startsWith('background=')) //Filtra o valor da key "nome"
        .split('=')[1]; //Separa pelo = e assume a posição [1]

        console.log(meuCookie);

        body.style.backgroundImage = `url('${meuCookie}')`;
    }
    catch{

    }

    let Cookiedark = false;
   
    try{

        Cookiedark = document.cookie
        .split('; ')    
        .find(item => item.startsWith('darkmode=')) 
        .split('=')[1];
        
        if(Cookiedark == "true"){
            
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

        else if (Cookiedark == "false"){

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

    catch{

    }

    let cookietodo;
    let cookiecounttodo;

    try{
      
      cookietodo = document.cookie
      .split('; ')    
      .find(item => item.startsWith('arrayTodo=')) 
      .split('=')[1]
      .split(',');

      cookiecounttodo = document.cookie
      .split('; ')    
      .find(item => item.startsWith('counttodo=')) 
      .split('=')[1];

      console.log(cookietodo[0]);
      console.log(cookiecounttodo);

      for(let i = 0; i<cookiecounttodo; i++){
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img = document.createElement('img');
        const img2 = document.createElement('img');

        img.src = "./assets/Setadark.png"
        img.classList.add("imagemSeta");

        img2.src = "./assets/Excluirdark.png"

        img.addEventListener("click", (e) => {
          e.preventDefault;

          
          remove(li, artigo);

          
          nextdoing(li, img, img2, p);
          
      });

      img2.addEventListener("click", (e)=>{
        e.preventDefault;

        


        remove(li, artigo);

      });

        
        try{
          p.innerText = cookietodo[i];
          li.appendChild(p);
          li.appendChild(img);
          li.appendChild(img2);
          artigo.appendChild(li);
        } catch(err){
          console.log(err)
        }
        
      }



    }

    catch{

    }

    let cookiedoing;
    let countdoing;

    try{
      
      cookiedoing = document.cookie
      .split('; ')    
      .find(item => item.startsWith('arrayDoing=')) 
      .split('=')[1]
      .split(',');

      countdoing = document.cookie
      .split('; ')    
      .find(item => item.startsWith('countdoing=')) 
      .split('=')[1];

      console.log(cookiedoing);
      console.log(countdoing);

      for(let i = 0; i<countdoing; i++){
        const lidoing = document.createElement('li');
        const pdoing = document.createElement('p');
        const imgdoing = document.createElement('img');
        const imgdoing2 = document.createElement('img');

        imgdoing.src = "./assets/Certodark.png"
        imgdoing.classList.add("imagemCerto");

        imgdoing2.src = "./assets/Excluirdark.png"

        imgdoing2.addEventListener("click", (e)=>{
          e.preventDefault;
          
          remove(lidoing, artigodoing);
        });

        imgdoing.addEventListener("click", (e)=>{
          e.preventDefault;
  
          
          remove(lidoing, artigodoing);
  
          
          nextdone(lidoing, imgdoing, imgdoing2, pdoing);
        });
        
        try{
          pdoing.innerText = cookiedoing[i];
          lidoing.appendChild(pdoing);
          lidoing.appendChild(imgdoing);
          lidoing.appendChild(imgdoing2);
          artigodoing.appendChild(lidoing);
        } catch(err){
          console.log(err)
        }
        
      }

    }

    catch{

    }

    let cookiedone;
    let countdone;

    try{
      
      cookiedone = document.cookie
      .split('; ')    
      .find(item => item.startsWith('arrayDone=')) 
      .split('=')[1]
      .split(',');

      countdone = document.cookie
      .split('; ')    
      .find(item => item.startsWith('countdone=')) 
      .split('=')[1];

      console.log(cookiedone);
      console.log(countdone);

      for(let i = 0; i<countdone; i++){
        const lidone = document.createElement('li');
        const pdone = document.createElement('p');
        const imgdone = document.createElement('img');
        const imgdone2 = document.createElement('img');

        imgdone.src = "./assets/Refazerdark.png"
        imgdone.classList.add("imagemRefazer");

        imgdone2.src = "./assets/Excluirdark.png"

        imgdone2.addEventListener("click", (e)=>{
          e.preventDefault;

          remove(lidone, artigodone);
  
        });

        imgdone.addEventListener("click", (e)=>{
          e.preventDefault;
  
          
  
        
          remove(lidone, artigodone);
  
        
          returntodo(lidone, imgdone, imgdone2, pdone);
          
        });
        
        try{
          pdone.innerText = cookiedone[i];
          pdone.classList.add("textodone");
          lidone.appendChild(pdone);
          lidone.appendChild(imgdone);
          lidone.appendChild(imgdone2);
          artigodone.appendChild(lidone);
        } 
        
        catch(err){
          console.log(err)
        }

      
      }
    }

    catch{

    }

    let cookiereturn;
    let countreturn;

    try{

      cookiereturn = document.cookie
      .split('; ')    
      .find(item => item.startsWith('arrayDone=')) 
      .split('=')[1]
      .split(',');

      countreturn = document.cookie
      .split('; ')    
      .find(item => item.startsWith('counttodo=')) 
      .split('=')[1];

      

      for(let i = 0; i<countreturn; i++){
        const lireturn = document.createElement('li');
        const preturn = document.createElement('p');
        const imgreturn = document.createElement('img');
        const imgreturn2 = document.createElement('img');

        imgreturn.src = "./assets/Setadark.png"
        imgreturn.classList.add("imagemSeta");

        imgreturn2.src = "./assets/Excluirdark.png"

        imgreturn2.addEventListener("click", (e)=>{
          e.preventDefault;

          remove(lireturn, artigoreturn);
  
        });

        imgreturn.addEventListener("click", (e)=>{
          e.preventDefault;
  
          
  
        
          remove(lireturn, artigoreturn);
  
        
          returntodo(lireturn, imgreturn, imgreturn2, preturn);
          
        });
        
        try{
          preturn.innerText = cookiereturn[i];
          // preturn.classList.add("textoreturn");
          lireturn.appendChild(preturn);
          lireturn.appendChild(imgreturn);
          lireturn.appendChild(imgreturn2);
          artigoreturn.appendChild(lireturn);
        } 
        
        catch(err){
          console.log(err)
        }

      
      }

    }

    catch{
      
    }
    
}

window.onload = refresh;