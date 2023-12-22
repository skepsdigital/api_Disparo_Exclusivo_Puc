const axios = require("axios");
const https = require("https");
const uuid = require("uuid");

module.exports = sendMindia = (
  phone,
  templateName,
  midia,
  preffix,
  routerBotKey
) => {
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
    .post(`https://${preffix}http.msging.net/messages`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${routerBotKey}`,
      },
    })
    .then((response) => {
      console.log("Resposta do servidor:", response.data);
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
};
