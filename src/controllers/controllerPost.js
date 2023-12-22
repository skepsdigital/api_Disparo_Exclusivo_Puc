const express = require("express");
const router = express.Router();
const whatTemplate = require("../utils/template");
const sendMessage = require("../services/blipTriggerText");
const sendMindia = require("../services/blipTriggerMidia");
const formatPhone = require("../utils/formatPhone");
const { preffix, routerBotKey } = require("../config/keys");

router.post("/trigger", async (req, res) => {
  try {
    const { tipo, parameters, midia } = req.body;

    let templateName = whatTemplate(tipo, parameters);

    const phone = formatPhone(req.body.phone);

    await sendMessage(preffix, tipo, parameters, phone, routerBotKey);

    if (midia && midia.length > 0) {
      const image = midia.filter((objeto) => objeto.type === "image");
      const document = midia.filter((objeto) => objeto.type !== "image");

      if (document.length > 0) {
        templateName = "midia_documento";
        for (let i = 0; i < document.length; i++) {
          await sendMindia(
            phone,
            templateName,
            document[i],
            preffix,
            routerBotKey
          );
        }
      }

      if (image.length > 0) {
        templateName = "midia_img";
        for (let i = 0; i < image.length; i++) {
          await sendMindia(
            phone,
            templateName,
            image[i],
            preffix,
            routerBotKey
          );
        }
      }
    }

    return res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
