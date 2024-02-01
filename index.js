const express = require('express');
const axios = require('axios');
const app = express();
const port = 6969;
app.use(express.json());

app.get('/ask', (req, res) => {
  const query = req.query.bundas;
  const url = 'https://useblackbox.io/chat-request-v4';
  const data = {
    textInput: query,
    allMessages: [{user: query}],
    stream: '',
    clickedContinue: false,
  };
  axios.post(url, data)
    .then(response => {
      const message = response.data.response[0][0];
      res.json({ message });
    })
    .catch(error => {
      res.status(500).json({ error: 'An error occurred.' });
    });
});
app.listen(port, () => {
  console.log(`Ang saimong port ay ${port}`);
});