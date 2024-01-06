const uuid = require("uuid");
const axios = require("axios");
const https = require("https");
const { preffix, routerBotKey } = require("../config/keys");

module.exports = sendMessage = async (tipo, parameters, phone, sender) => {
  const url = "https://" + preffix + ".http.msging.net/messages";
  const token = sender || routerBotKey;

  const messageTemplateName = tipo;

  const recipient = phone + "@wa.gw.msging.net";

  const messageData = {
    id: uuid.v1(),
    to: recipient,
    type: "application/json",
    content: {
      type: "template",
      template: {
        name: messageTemplateName,
        language: {
          code: "pt_BR",
          policy: "deterministic",
        },
        components: [
          {
            type: "body",
            parameters: parameters,
          },
        ],
      },
    },
  };

  axios
    .post(url, messageData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${token}`,
      },
    })
    .then((response) => {
      console.log("Resposta do servidor text:", response.messageData);
    })
    .catch((error) => {
      console.error("Erro na requisição text:", error);
    });
};
