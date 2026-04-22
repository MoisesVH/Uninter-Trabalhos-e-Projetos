let botao = document.querySelector("#botao");
let msg = document.querySelector("#msg")
botao.addEventListener("click", aparecerMensagem);
function aparecerMensagem() {
    msg.innerHTML="Sempre parecerá impossivel até que seja feito!"
    msg.classList.add("form")
}