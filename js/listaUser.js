document.getElementById('ListarButton').addEventListener('click', function(event){
    event.preventDefault();
    
    function getAll() {
        fetch('/backend/usuarios.php', {
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
            displayUsers(data);
        })
        .catch(error => alert('Erro na requisição: ' + error));
    }
    
    function displayUsers(data) {
        const users = data.usuarios;  
        const usersDiv = document.getElementById('usersList');
        usersDiv.innerHTML = ''; 
    
        const list = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${user.id} - Nome: ${user.nome} - Email: ${user.email}`;
            const listItem2 = document.createElement('hr');
            listItem.appendChild(listItem2);
            list.appendChild(listItem);
        });
    
        usersDiv.appendChild(list);
    }
    getAll();
});