const https = require("https")
const EventSource = require('eventsource');
const axios = require('axios')

const options = {
  hostname: "api.pipedream.com",
  port: 443,
  path: "/v1/sources/dc_AjuaVp/event_summaries?expand=event",
  headers: {
    "Authorization": "Bearer 1fdf8b4cfd37a46752ce78e8818c00c5",
  },
}

function requisitar() {


  const eventSourceInit = { headers: {"Authorization": "Bearer 1fdf8b4cfd37a46752ce78e8818c00c5", } }
  const es = new EventSource("https://api.pipedream.com/sources/dc_AjuaVp/sse", eventSourceInit);
  
  console.log("Listening to SSE stream at https://api.pipedream.com/sources/dc_AjuaVp/sse\n");
  

  
  es.onmessage = event => {
    console.log(event.data);
    
    var data = {};
  if (event.data) {
    data = JSON.parse(event.data);
  }

   console.log(data.Name)
   
  

    var nome = data['Name']
    var empreendimento = "37075" 
    var ddd = "21"
    var telefone = "21547854784"
    var origem = "whatsapp" 

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
  }
  


requisitar()
console.log('Collector: Novo Lead, efetuando coleta') 

