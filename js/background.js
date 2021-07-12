const button = document.querySelector(".Aplicar");
const Backgroundimg = document.querySelector(".formulario2");
const limpar = document.querySelector(".Limpar");
const body = document.querySelector("body");


limpar.addEventListener("click", (e) => {

    e.preventDefault();
    Backgroundimg.value="";

});

button.addEventListener("click", (e)=>{

    e.preventDefault()
    const url = Backgroundimg.value;
    body.style.backgroundImage = `url('${url}')`;
 
});



 


