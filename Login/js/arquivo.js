
// Busca todos os .eyes através de um foreach e, em seguida, adiciona um evento de click em cada um deles. Se eles forem clicados, serão direcionados ao main
document.querySelectorAll(".eye").forEach((eye) => {
    eye.addEventListener("click", main);
})


function main() {
    let eyes = document.querySelectorAll(".eye");
    //acessando a imagem .eye

    //há duas formas de realizar esse processo 1:

    eyes.forEach((olho) =>
        olho.classList.toggle("hide")
        // toggle => se existir a classe, remove. Se não existir, adiciona
    );


    // acessa o campo senha e verifica se o atributo é do tipo password. Se sim, troca para text. Se for text, troca para password
    if (document.querySelector("#senha").getAttribute("type") == "password") {
        document.querySelector("#senha").setAttribute("type", "text");
    } else {
        document.querySelector("#senha").setAttribute("type", "password");
    }



    /*processo 2 : sucinto

    document.querySelectorAll(".eye").forEach((olho) =>
        olho.classList.toggle("hide")
    )

    */
}