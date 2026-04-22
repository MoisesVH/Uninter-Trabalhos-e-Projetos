function enviarMensagem() {
    //coletando os valor digitados nos inputs
    let nome = document.getElementById('idNome').value;
    let email = document.getElementById('idEmail').value;
    let mens = document.getElementById('idMensagem').value;
    //verificando se algum campo está vazio
    if (nome == '' || email == '' || mens == '') {
        alert('Você deixou algum campo vazio, preencha corretamente os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
    }
}

//Adicionando interação ao portifólio
function link01() {
    window.open('https://moisesvh.github.io/Uninter-Trabalhos-e-Projetos/', '_blank');
}
function link02() {
    window.open('https://www.figma.com/design/5mnBHbc8lisuUT3uttjo9k/APP-Bras.-BANK?node-id=0-1&p=f&t=iG3EG6wk6I77mhKV-0', '_blank');
}