const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: 'https://api.beta.unycos.com/u/courses/spotlights/natacion',
      headers: {
        'Content-Type': 'application/json',
        'x-mejor-key': 'unycos',
      },
      data: req.body,
    });

    // Adiciona o cabeçalho Access-Control-Allow-Origin
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Encaminha a resposta da API para o cliente
    res.send(response.data);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
