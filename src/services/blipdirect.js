const axios = require("axios");
const https = require("https");
const uuid = require("uuid");
const { preffix, routerBotKey } = require("../config/keys");
module.exports = setUserMasterState = async (phone, botId, sender) => {
  try {
    const token = sender || routerBotKey;
    const user = phone + "@wa.gw.msging.net";
    let result = await axios.post(
      "https://" + preffix + ".http.msging.net/commands",
      {
        id: uuid.v1(),
        method: "set",
        uri: "/contexts/" + user + "/master-state",
        type: "text/plain",
        resource: botId + "@msging.net",
      },
      {
        headers: {
          Authorization: "Key " + token,

          "Content-Type": "application/json",
        },
      }
    );

    console.log("Resposta do servidor direct:", result.data);
  } catch (e) {
    console.error("Erro na requisição direct:", e);
  }
};
