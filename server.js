require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());

let staticPath = path.join(__dirname, process.env.ABSOLUTE_STATIC_PATH)
app.use('/static', express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, process.env.ABSOLUTE_STATIC_PATH, '../index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err); }
  console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
});