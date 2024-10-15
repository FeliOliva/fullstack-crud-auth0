const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const RoutesClientes = require("./routes/clientsRoutes"); // Asegúrate de que la ruta sea correcta
app.use("/api", RoutesClientes);

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-UserId, X-Nonce" +
      ", X-Secret, X-Ts, X-Sig, X-Vendor-Sig, X-Vendor-Apikey, X-Vendor-Nonce, X-Vendor-Ts, X-ProfileId" +
      ", X-Authorization, Authorization, Token, Pragma, Cache-Control, Expires"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "HEAD,OPTIONS,GET,PUT,POST,DELETE"
  );
  next();
});

// Exporta el handler para Vercel
module.exports = app;
