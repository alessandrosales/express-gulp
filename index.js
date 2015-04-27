var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/build'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/build/views');

app.get('/', function(req, res){
  res.render('index.html', function(err, html){
    if(err){
      console.error(err);
    }
    
    res.send(html);
  });
});

var server = app.listen(8080, function(){
  console.log("Acesse: http://localhost:%d", 8080);
});