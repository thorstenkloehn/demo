const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Verwenden Sie die Umgebungsvariable PORT oder einen Standardwert
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server läuft auf Port ${port}`);
});