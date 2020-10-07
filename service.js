const axios = require('axios')


axios.get('https://api.github.com/users/' + username)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  

// Requisições POST, note há um parâmetro extra indicando os parâmetros da requisição
axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response){
    console.log('salvo com sucesso')
  });  