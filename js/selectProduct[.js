document.getElementById('SelectPButton').addEventListener('click', function(event){
    event.preventDefault();

    const idProduto = document.getElementById('selectPid').value

    if (!idProduto) {
        alert("Por favor, insira um id!");
        return;
    }
    fetch('/backend/produtos.php?id=' + idProduto,  { 
        method: 'GET',
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
                title: "Não encontrado",
                text: "nenhum usuario encontrado",
                icon: "warning",
              });
        }else{
            const nome = document.value = data.produto.nome;
            const preco = document.value = data.produto.preco;
            const QTD = document.value = data.produto.quantidade;
            swal({
                title: "usuario encontrado",
                text: "Nome:  "+nome+ " Preco:  " +preco+ " Quantidade:  "+ QTD ,
                icon: "success",
              });
        } 
        
        
    })
    .catch(error => alert('Erro na requisição: ' + error));

});
