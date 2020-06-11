function emailOrcamento(){
    var nomeAmigu = document.querySelector('#orcamento-amigu').value;
    var nome = document.querySelector('#orcamento-nome').value;
    var endEmail = document.querySelector('#orcamento-email').value;
    var telefone = document.querySelector('#orcamento-telefone').value;
    var emailDestino = "arthurescalera@gmail.com";
    var orcamento = "mailto:" + emailDestino + "?subject=Queria saber mais sobre o Amigurumi " + nomeAmigu + "&body=Olá me chamo " + nome + " e tenho o interesse no Amigurumi " + nomeAmigu + " e meu telefone é " + telefone;

    window = window.open(orcamento)
}

function insertOrcamento(){
    var amiguCatal = document.querySelector('#nome-amigu');
    var nomeAmigu = document.querySelector('#orcamento-amigu');
    nomeAmigu.value = amiguCatal.textContent;
    console.log(amiguCatal + "  " + nomeAmigu.value);
}