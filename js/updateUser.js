document.getElementById('UpdateButton').addEventListener('click', function(event){
    event.preventDefault();
    
        const idUsuario = document.getElementById('updateid').value
        const nomeupdate = document.getElementById('nomeupdate').value
        const emailupdate = document.getElementById('emailupdate').value
        const senhaupdate = document.getElementById('senhaupdate').value

        const usuarioAtualizado = {
            nome: nomeupdate,
            email: emailupdate,
            senha: senhaupdate
        };


        if (!idUsuario) {
            alert("Por favor, insira um id!");
            return;
        }
        fetch('/backend/usuarios.php?id=' + idUsuario, { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioAtualizado)
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
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
                    title: "Não Atualizado",
                    text: "erro de Atualizamento!",
                    icon: "warning",
                  });
            }else{
                swal({
                    title: "Atualizado",
                    text: "usuario Atualizado com Sucesso!",
                    icon: "success",
                  });
            } 
            
        })
        .catch(error => alert('Erro na requisição: ' + error));
    });