document.getElementById('submitButton').addEventListener('click', function(event){
event.preventDefault();

    const nomeUsuario = document.getElementById('nome').value;
    const emailUsuario = document.getElementById('email').value;
    const senhaUsuario = document.getElementById('senha').value;

    if (!nomeUsuario) {
        alert("Por favor, insira um nome!");
        return;
    }
    if (emailUsuario.indexOf('@') === -1) {
        alert("Por favor, insira um endereço de email válido!");
        return;
    }

    if (!senhaUsuario) {
        alert("Por favor, insira uma senha!");
        return;
    }


    const usuario = {
        nome: nomeUsuario,
        email: emailUsuario,
        senha: senhaUsuario
    };
    fetch('/backend/usuarios.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                window.location.href = './login.html';
                throw new Error('Não autorizado');
            } else {
                throw new Error('Sem rede ou não conseguiu localizar o recurso');
            }
        }
        return response.json();
    })
    .then(data => {
        if(!data.status){
            swal({
                title: "Não Cadastrado",
                text: "usuario já cadastrado!",
                icon: "warning",
              });
        }else{
            swal({
                title: "Cadastrado",
                text: "usuario cadastrado com Sucesso!",
                icon: "success",
              });
        } 
       
    })
    .catch(error => alert('Erro na requisição: ' + error));
});
