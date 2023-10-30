document.getElementById('VincularButton').addEventListener('click', function(event){

    event.preventDefault();

    const idusuario = document.getElementById('idUser').value;
    const idproduto = document.getElementById('idProduto').value;

    if (!idusuario) {
        alert("Por favor, insira um id de usuário!");
        return;
    }
    if (!idproduto) {
        alert("Por favor, insira um id de usuário!");
        return;
    }


    const venda = {
        idusuario: idusuario,
        idproduto: idproduto
    };

    fetch('/backend/venda.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(venda)
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
                title: "Já Vinculado!",
                text: "já vinculado!",
                icon: "warning",
              });
        }else{
            swal({
                title: "Vinculado!",
                text: "vinculado com Sucesso!",
                icon: "success",
              });
        } 
       
    })
    .catch(error => alert('Erro na requisição: ' + error));
});