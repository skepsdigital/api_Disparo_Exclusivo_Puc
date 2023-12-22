require("dotenv").config();

const keys = {
  routerBotKey: process.env.ROUTER_BOT_KEY,
  preffix: process.env.PREFFIX,
  port: process.env.PORT,
};

module.exports = keys;
