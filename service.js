const axios = require('axios')



var empreendimento = "37075" 
var nome = "testolino3" // data.name API Octa
var ddd = "21"
var telefone = "969796979"
var origem = "whatsapp"


function coletar() {

axios({
  method: 'post',
  url: `http://inova.housecrm.com.br/api/email?empreendimento=${empreendimento}&nome=${nome}&ddd=${ddd}&telefone=${telefone}origem=whatsapp`,
  data: {
    empreendimento: empreendimento,
    nome: nome,
    ddd: ddd,
    telefone: telefone,
    origem: origem 
  }
});

}

coletar()
console.log('Função efetuada')

// empreendimento nome ddd telefone origem