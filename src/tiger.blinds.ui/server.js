const path = require('path')
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log('sending file...');
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, () => console.log(`Tiger Blinds App listening on port ${PORT}!`));
