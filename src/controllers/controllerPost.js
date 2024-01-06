const express = require("express");
const router = express.Router();
const whatTemplate = require("../utils/template");
const sendMessage = require("../services/blipTriggerText");
const sendMindia = require("../services/blipTriggerMidia");
const formatPhone = require("../utils/formatPhone");
const setUserMasterState = require("../services/blipdirect");

router.post("/trigger", async (req, res) => {
  try {
    const { tipo, parameters, midia, sender, direct } = req.body;

    let templateResult = whatTemplate(tipo, parameters);

    let templateName = templateResult ? templateResult : tipo;

    const phone = formatPhone(req.body.phone);

    await sendMessage(templateName, parameters, phone, sender);

    if (midia && midia.length > 0) {
      const image = midia.filter((objeto) => objeto.type === "image");
      const document = midia.filter((objeto) => objeto.type !== "image");

      if (document.length > 0) {
        templateName = "midia_documento";
        for (let i = 0; i < document.length; i++) {
          await sendMindia(phone, templateName, document[i], sender);
        }
      }

      if (image.length > 0) {
        templateName = "midia_img";
        for (let i = 0; i < image.length; i++) {
          await sendMindia(phone, templateName, image[i], sender);
        }
      }
    }

    if (direct) {
      await setUserMasterState(phone, direct, sender);
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
