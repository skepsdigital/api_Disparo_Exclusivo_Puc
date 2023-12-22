const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const validateBody = require("./src/middware/validateBody");
const schemaBody = require("./src/schema/schemaBody");
const triggerMesssage = require("./src/controllers/controllerPost");
const { port } = require("./src/config/keys");

const PORT = port || 3003;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", validateBody(schemaBody), triggerMesssage);

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
  console.log("✅ API Started");
});
