const axios = require("axios");
const https = require("https");
const uuid = require("uuid");
const { preffix, routerBotKey } = require("../config/keys");
module.exports = sendMindia = (phone, templateName, midia, sender) => {
  const token = sender || routerBotKey;
  const data = {
    id: uuid.v1(),
    to: phone + "@wa.gw.msging.net",
    type: "application/json",
    content: {
      type: "template",
      template: {
        name: templateName,
        language: {
          code: "pt_BR",
          policy: "deterministic",
        },
        components: [
          {
            type: "header",
            parameters: [midia],
          },
          {
            type: "body",
            parameters: [],
          },
        ],
      },
    },
  };

  axios
    .post(`https://${preffix}.http.msging.net/messages`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${token}`,
      },
    })
    .then((response) => {
      console.log("Resposta do servidor midia:", response.data);
    })
    .catch((error) => {
      console.error("Erro na requisição midia:", error);
    });
};
