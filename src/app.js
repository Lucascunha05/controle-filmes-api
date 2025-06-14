const express = require('express');
const app = express();
const filmeRoutes = require('./routes/filmeRoutes');

app.use(express.json());
app.use(filmeRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
