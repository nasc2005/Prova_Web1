document.getElementById('ListarPButton').addEventListener('click', function(event){
    event.preventDefault();
    
    function getAll() {
        fetch('/backend/produtos.php', {
            method: 'GET'
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
            if (!data) {
                console.log('A resposta está vazia');
                return;
            }
            displayProd(data);
        })
        .catch(error => alert('Erro na requisição: ' + error));
    }
    
    function displayProd(data) {
        const produtos = data.produtos;
        const prodDiv = document.getElementById('usersList2');
        prodDiv.innerHTML = '';
    
        const list = document.createElement('ul');
        produtos.forEach(prod => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${prod.id} - Nome: ${prod.nome} - R$:${prod.preco} - Quantidade: ${prod.quantidade}`;
            const listItem2 = document.createElement('hr');
            listItem.appendChild(listItem2);
            list.appendChild(listItem);
        });
    
        prodDiv.appendChild(list);
    }
    
    getAll();    
});