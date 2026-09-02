const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('sarah,Grace, and I are working on this project together');
});

const port = 3000;

app.listen(process.env.PORT || port, () => {
    console.log('web server is listening at port' + (process.env.PORT || port));
});