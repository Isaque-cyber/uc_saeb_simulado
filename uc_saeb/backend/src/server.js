
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const pool = require("./config/database");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use(
  session({
    secret: "chave-secreta-do-sistema",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 1000
    }
  })
);

app.get("/", (req, res) => {
  res.json({
    mensagem: "Backend funcionando!"
  });
});

const PORT = 3000;

pool.getConnection()
  .then((connection) => {
    console.log("MySQL conectado com sucesso!");
    connection.release();
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MySQL:", error.message);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

