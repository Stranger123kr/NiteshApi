const express = require("express");
const server = express();
require("dotenv").config();
require("./DB/DataBase");
const router = require("./Routes/Routers");
// ====================================

server.use(express.json());
server.use("/api", router);

// ====================================

server.listen(process.env.PORT || 5000, () => {
  console.log(`Sever listing on port number ${process.env.PORT}`);
});
