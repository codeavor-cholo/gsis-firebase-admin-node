const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: true}),cors());


require('./app/routes')(app, {});

app.listen(PORT, () => {
  console.log("we are live on " + PORT);
})
