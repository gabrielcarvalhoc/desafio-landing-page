let form = document.getElementById('formulario');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let fnome = document.getElementById('nome');
    let femail = document.getElementById('email');
    let ftel = document.getElementById('telefone');
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let msg = document.querySelector('.msg-cadastro');
    
    let dados = {
        nome,
        email,
        telefone
    };
    let dadosConvertidos = JSON.stringify(dados);
    localStorage.setItem('lead', dadosConvertidos);
      
    msg.style.display = 'block';
});