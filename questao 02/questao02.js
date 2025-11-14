function mudarForma(){
    const div = document.getElementById("forma")
    const button = document.getElementById("btn-forma")
    if (div.style.borderRadius == "50%"){
        div.style.borderRadius = "0%";
        button.innerText = "Retornar forma original";
    }
    else{
        div.style.borderRadius = "50%";
        button.innerText = "Mudar forma";
    }
}
