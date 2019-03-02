var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 3000;

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json()); // Required for POST routes
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("App is running on port 3000");
});