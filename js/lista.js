const artigo = document.getElementById('artigo');
const artigodoing = document.getElementById('artigodoing');
const artigodone = document.getElementById('artigodone');
let count=0;
let counttodo = 0;
let countdoing = 0;
let countdone = 0;
let arrayCookie1 = [];
let arrayCookie2 = [];
let arrayCookie3 = [];


function add(){ //Função para adicionar elemento
    
    const input = document.querySelector('.formulario');
    const valorInput = input.value; //Salva o valor do input
    input.value = ""; //Limpa o input

    
    if(valorInput == ""){
        alert("Campo de tarefa vazio");
    }
    else{

        counttodo++;
        
        const li = document.createElement('li'); //Adiciona a li

        const p = document.createElement('p'); //Adiciona o P com o Texto
        p.innerText = valorInput;
        li.appendChild(p);
        
        const img = document.createElement('img');
        li.appendChild(img);
        img.src = "./assets/Setadark.png"
        img.classList.add("imagemSeta");
        
        const img2 = document.createElement('img');
        li.appendChild(img2);
        img2.src = "./assets/Excluirdark.png"
        
        artigo.appendChild(li);
        
        arrayCookie1.push(valorInput);

        img.addEventListener("click", (e) => {
            e.preventDefault;

            let indice1 = arrayCookie1.indexOf(li);
            if(indice1>-1){
                arrayCookie1.splice(indice1,1);
            }

            counttodo--;
            remove(li, artigo);

            countdoing++;
            nextdoing(li, img, img2, p);
            
        });
        
        img2.addEventListener("click", (e)=>{
            e.preventDefault;

            let indice1 = arrayCookie1.indexOf(li);
            if(indice1>-1){
                arrayCookie1.splice(indice1,1);
            }

            counttodo--;
            remove(li, artigo);

        });
    }
    
}

function remove(liremove, artigoremove){
    artigoremove.removeChild(liremove);

}

function nextdoing(linext, imagem, imagemexcluir, pdoing){

    linext.removeChild(imagem);
    linext.removeChild(imagemexcluir);

    const img3 = document.createElement("img");
    img3.src = "./assets/Certodark.png";
    img3.classList.add("imagemCerto");
    
    const imagemexcluir2 = document.createElement('img');
    imagemexcluir2.src = "./assets/Excluirdark.png"
    
    linext.appendChild(img3);
    linext.appendChild(imagemexcluir2);
    
    artigodoing.appendChild(linext);

    let textodoing = pdoing.innerText;
    console.log(textodoing);
    arrayCookie2.push(textodoing);

    imagemexcluir2.addEventListener("click", (e)=>{
        e.preventDefault;

        let indice2 = arrayCookie2.indexOf(linext);
        if(indice2>-1){
            arrayCookie2.splice(indice2,1);
        }

        countdoing--;
        remove(linext, artigodoing);
    });

    img3.addEventListener("click", (e)=>{
        e.preventDefault;

        let indice2 = arrayCookie2.indexOf(linext);
        if(indice2>-1){
            arrayCookie2.splice(indice2,1);
        }

        countdoing--;
        remove(linext, artigodoing);

        countdone++;
        nextdone(linext, img3, imagemexcluir2, pdoing);
    });
    
}

function nextdone(linext, imagem, imagemexcluir, pdone){

    linext.removeChild(imagem);
    linext.removeChild(imagemexcluir);

    const img4 = document.createElement("img");
    img4.src = "./assets/Refazerdark.png";
    img4.classList.add("imagemRefazer");

    const imagemexcluir3 = document.createElement('img');
    imagemexcluir3.src = "./assets/Excluirdark.png"

    linext.appendChild(img4);
    linext.appendChild(imagemexcluir3);
    
    artigodone.appendChild(linext);

    let textodone = pdone.innerText;
    console.log(textodone);
    arrayCookie3.push(textodone);

    imagemexcluir3.addEventListener("click", (e)=>{
        e.preventDefault;

        let indice3 = arrayCookie3.indexOf(linext);
        if(indice3>-1){
            arrayCookie3.splice(indice3,1);
        }
        
        countdone--;
        remove(linext, artigodone);

    });

    if(count>0){
        pdone.classList.remove("textotodo");
    }
    pdone.classList.add("textodone");

    img4.addEventListener("click", (e)=>{
        e.preventDefault;

        let indice3 = arrayCookie3.indexOf(linext);
        if(indice3>-1){
            arrayCookie3.splice(indice3,1);
        }

        countdone--;
        remove(linext, artigodone);

        counttodo++;
        returntodo(linext, img4, imagemexcluir3, pdone);
        
    })
}

function returntodo(linext, imagem, imagemexcluir, ptodo){

    linext.removeChild(imagem);
    linext.removeChild(imagemexcluir);

    const img5 = document.createElement("img");
    img5.src = "./assets/Setadark.png";
    img5.classList.add("imagemSeta");

    const imagemexcluir4 = document.createElement('img');
    imagemexcluir4.src = "./assets/Excluirdark.png"

    linext.appendChild(img5);
    linext.appendChild(imagemexcluir4);

    artigo.appendChild(linext);

    let textoreturn = ptodo.innerText;
    console.log(textoreturn);
    arrayCookie1.push(textoreturn);


    ptodo.classList.add("textotodo");
    ptodo.classList.remove("textodone");

    img5.addEventListener("click", (e)=>{
        e.preventDefault;

        count++;

        let indice1 = arrayCookie1.indexOf(linext);
        if(indice1>-1){
            arrayCookie1.splice(indice1,1);
        }

        counttodo--;
        remove(linext, artigo);

        countdoing++;
        nextdoing(linext, img5, imagemexcluir4, ptodo);
        
    });

    imagemexcluir4.addEventListener("click", (e)=>{
        e.preventDefault;
        
        counttodo--;
        remove(linext, artigo);
    });

}







