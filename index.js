const express = require('express');
const routes = require('./server/routes/');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + '/public'));

app.use(routes(express.Router()));

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: './public',
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('App listening on port', app.get('port'));
});
