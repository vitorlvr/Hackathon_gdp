import fetch from 'node-fetch';
import axios from 'axios';

// API URL
const api_url =
	"https://hackrestaurante-garotos-de-programa.azurewebsites.net/api/cliente/produtos";

const api = axios.get('https://hackrestaurante-garotos-de-programa.azurewebsites.net/api/cliente/produtos').then((res) => {
    console.log(res.data)
})
.catch((error) => {
    console.log(error);
});


// Definindo a função 
async function getapi(url) {
	const response = await fetch(url);

	// Armazenar as infos do API
	//Printar as infos do API
    // console.log(response)

    //data.forEach((category) => {
        //console.log(category)
        //console.log('--------------')
    
    //})
}
getapi(api_url)