var receber_novidades = document.getElementById("receber_novidades");

receber_novidades.addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var autorizo_conta = document.getElementById("autorizo_conta").checked;

    if (!nome || !nome.toString().trim()) {
        alert("Informe o nome, por favor.");
        return;
    }

    // .length pega o tamanho (caracteres) de uma string
    if (nome.length < 5) {
        alert("Informe um nome válido, por favor.");
        return;
    }

    if (!email || !email.toString().trim()) {
        alert("Informe o e-mail, por favor.");
        return;
    }

    if (!autorizo_conta) {
        alert("Autorize por favor.");
        return;
    }
});



