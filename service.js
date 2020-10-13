const https = require("https")
const EventSource = require('eventsource');
const axios = require('axios')
function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}
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
      wait(15000)
      console.log("Collector: Esperando cliente digitar o nome");
      const name = data.event.body.Name;
      const number = data.event.body.PhoneContacts[0].Number     
      
      const empreedimento1 = data.event.body.CustomField.chat_origem
      console.log(empreedimento1)

      var empreendimento = ""
      if (empreedimento1 == "Zona oeste"){
        empreendimento = '37075'
    } else {
        empreendimento = "37154"
    }
      
   
      var telefone = number
      var nome = name
      
     
      // var nome = name
  }
   console.log(data)  
   console.log(nome)
   console.log(telefone)  
   console.log(empreendimento) 

   
     
    
    var ddd = "21"   
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
console.log('🚀 Collector: Robô preparado para receber dados dos leads') 
