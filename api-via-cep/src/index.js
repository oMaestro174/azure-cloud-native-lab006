const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cepRouter = require('./routes/cep');

app.use(express.json());
app.use('/cep', cepRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});