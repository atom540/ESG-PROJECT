const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

let surveyResponses = {};


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
  surveyResponses = req.body;
  res.json({ success: true });
});

app.get('/results', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

app.get('/api/results', (req, res) => {
  res.json(surveyResponses);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
