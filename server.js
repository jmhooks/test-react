const express = require('express');
const app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
  ignore: false
});

let data = [
  {
    status: "ERROR",
    description: "Problem running function on server",
    key: "A1"
  },
  {
    status: "WARNING",
    description: "Function may have incorrent results",
    key: "A2"
  },
  {
    status: "SUCCESS",
    description: "Successfully ran function on server",
    key: "A3"
  },
  {
    status: "UNKNOWN",
    description: "Could not obtain a status",
    key: "A4"
  },
  {
    status: "SUCCESS",
    description: "Successfully ran function on server",
    key: "A5"
  }
]

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});
