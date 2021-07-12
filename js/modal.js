function abrirModal(){

    const modal = document.querySelector(".modal");
    
    modal.style.display = "block"; // grid
}

function fecharModal(){
    
    const modal = document.querySelector(".modal");

    window.onclick = (event) => {  //Essa função vai ser chamada toda vez que clicamos na tela 
        if (event.target == modal)
            modal.style.display = "none";
        
    }

}