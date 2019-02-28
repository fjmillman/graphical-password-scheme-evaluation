const express = require("express");
const body = require("body-parser");
const cors = require("cors");
const api = require("./routes");

const port = 9999;

const server = express();
server.use(body.json());
server.use(cors());
server.use(api);

server.listen(port, () => console.log(`Server is listening on ${port}...`));
