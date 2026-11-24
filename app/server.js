const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mensagem: "Olá, versão 2 chegou sozinha!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;

// Só liga o servidor quando o arquivo é executado direto (não nos testes)
if (require.main === module) {
  app.listen(8000, "0.0.0.0", () => console.log("Rodando na porta 8000"));
}
