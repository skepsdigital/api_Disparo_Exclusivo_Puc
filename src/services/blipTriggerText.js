const uuid = require('uuid');
const axios = require('axios');
const https = require('https');

module.exports= sendMessage = async (preffix,tipo,parameters,phone,routerBotKey)=> {
    const url = 'https://'+preffix+'http.msging.net/messages'; // Replace with the actual contract ID
    const token = routerBotKey; // Replace with your actual token
    const messageTemplateName = whatTemplate(tipo, parameters);; // Replace with the template name
    console.log(messageTemplateName);
    const recipient = phone+'@wa.gw.msging.net'; // Replace with the recipient's address
  
    const messageData = {
      id: uuid.v1(), // Replace with a unique ID
      to: recipient,
      type: 'application/json',
      content: {
        type: 'template',
        template: {
          name: messageTemplateName,
          language: {
            code: 'pt_BR',
            policy: 'deterministic'
          },
          components: [
            {
              type: 'body',
              parameters:  parameters 
            }
          ]
        }
      }
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Key ${token}`
        },
        body: JSON.stringify(messageData)
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }