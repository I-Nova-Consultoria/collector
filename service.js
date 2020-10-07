const axios = require('axios')
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000


// Collector ativando leitor de webhooks

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Robô Collector ativo na porta ${PORT}`))

app.post("/collector", (req, res) => {
    console.log(req.body) // 
    res.status(200).end() // 
  })

 

// Estruturação de dados  

var empreendimento = "37075" 
var nome = "testolino3" // data.name API Octa
var ddd = "21"
var telefone = "969796979"
var origem = "whatsapp"



// Envio de dados coletados para o HouseCRM

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
console.log('Collector: Novo Lead, efetuando coleta')

// empreendimento nome ddd telefone origemm