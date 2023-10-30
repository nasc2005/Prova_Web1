function getAll() {
    fetch('/backend/venda.php', {
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
    let legendas = [];
    let valores = [];
    const produtos = data.status;  
    console.log(produtos);
    produtos.forEach(user => {
        legendas.push(user.id);
        valores.push(user.quantidade_produtos);
    });
    const customColors = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(50, 205, 50, 0.6)',
        'rgba(255, 99, 71, 0.6)',
        'rgba(0, 128, 128, 0.6)',
        'rgba(255, 69, 0, 0.6)',
    ];
                    
            new Chart("myChart", {
            type: "doughnut",
            data: {
                labels: legendas,
                datasets: [{
                backgroundColor: customColors,
                data: valores
                }]
            },
            options: {
                legend: {display: true},
                title: {
                display: true,
                text: "Produtos Vinculaldos"
                }
            }
            });

}
getAll();
