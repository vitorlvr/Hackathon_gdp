import fetch from 'node-fetch';

// API URL
const api_url =
	"https://hackrestaurante-garotos-de-programa.azurewebsites.net/api/cliente/categorias";

// Definindo a função 
async function getapi(url) {
	const response = await fetch(url);

	// Armazenar as infos do API
	var data = await response.json();
	//Printar as infos do API

    data.forEach((category) => {
        console.log(category.nome)
        console.log('--------------')

        category.produtos.forEach((produto) => {
            console.log(produto.nome)
            console.log(produto.descricao)
            console.log(produto.valorUnitario)
            console.log(produto.disponivel)
            console.log('--------------')
        })

        console.log('==============')
    
    })
}
getapi(api_url)