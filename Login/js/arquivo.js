
document.querySelector("#btn").addEventListener("click", main);
//ativado ao clicar no botão de submeter

document.querySelector("#esqueci").addEventListener("click", esqueci);


document.querySelector("#back").addEventListener("click", back);

document.querySelector("#send").addEventListener("click", send);

// Busca todos os .eyes (img) através de um foreach e, em seguida, adiciona um evento de click em cada um deles. Se eles forem clicados, serão direcionados ao olhos
document.querySelectorAll(".eye").forEach((eye) => {
    eye.addEventListener("click", olhos);
})


function olhos() {
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

function main() {
    validacao();


}

function validacao() {

    if (!document.querySelector("#email").value.length > 0) {
        document.querySelector("#email").classList.add("campo_erro");

        document.querySelector("#email").focus();
        // se existir a classe .campo aplicado a senha, ele remove.
        if (document.querySelector("#senha").classList.contains("campo_erro")) {
            document.querySelector("#senha").classList.remove("campo_erro");
        }


    } else if (!document.querySelector("#senha").value.length > 0) {
        document.querySelector("#senha").classList.add("campo_erro");
        document.querySelector("#senha").focus();


        // se existir a classe .campo aplicado a senha, ele a remove. Isso evita que você preencha o campo e-mail e ele continue vermelho da vez q você não tinha preenchido.

        if (document.querySelector("#email").classList.contains("campo_erro")) {
            document.querySelector("#email").classList.remove("campo_erro");
        }
    } else {
        alert("Você passou")

    }

}


function esqueci() {
    let div = document.querySelector("#page");
    let modal = document.querySelector(".modal");

    div.classList.add("ocultar");//oculta a div page

    if (modal) {
        modal.classList.remove("off");
    } else {
        modal.classList.add("off");
    }



    // modal.classList.toggle("off");//remove a classe off. Já que ela existe por padrão. Assim, será mostrado o modal

}

function back() {
    // Nesse caso, ao clicar, já existirá uma classe ocultar. Nesse caso, ele irá desativar, fazendo retornar a tela padrão que tinha sumido com o display block
    document.querySelector("#page").classList.toggle("ocultar");

    // removendo o modal ao voltar para a página principal. Ou seja, adiciona a classe off
    if (document.querySelector(".modal")) {
        document.querySelector(".modal").classList.add("off");
    }

    // removendo o elemento gerado através do removeChild -> sai a mensagem que foi enviado o email
    if (document.querySelector("#msg")) {
        document.querySelector("#resultado").removeChild(document.querySelector("#msg"));
    }


    removeClass();

}

function send() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email2 = document.querySelector("#email2");

    if (
        !email2.value.length > 0 || !emailRegex.test(
        email2.value    )) {
        document.querySelector("#email2").classList.add("campo_erro");
        document.querySelector("#email2").focus();

        /*
            O código abaixo é sobre um cenário : 
            O usuário preenche o e-mail corretamente e, em seguida, é disparado a criação do "p" que irá dizer que foi enviado. No entanto, ele tenta enviar um novo e-mail, só que fora do padrão solicitado dentro desse if. Nesse caso, o if abaixo serve para remover o elemento que 'p' que mostra msg 'enviado com sucesso'
        */
        if(document.querySelector("#msg")){
            document.querySelector("#resultado").removeChild(document.querySelector("#msg"))
        }
    } else {
        removeClass();
        if (!document.querySelector("#msg")) {

            let msg = document.createElement("p");
            msg.setAttribute("id", "msg");
            msg.innerHTML = "Enviado com sucesso";

            document.querySelector("#resultado").appendChild(msg);
            document.querySelector("#email2").value = "";
            email2.focus();

        }
    }

}

function removeClass() {
    if (document.querySelector("#email2").classList.contains("campo_erro")) {
        document.querySelector("#email2").classList.remove("campo_erro");
    }
}