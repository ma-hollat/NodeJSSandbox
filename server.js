const express = require('express');
const app = express();

//routing

app.get('/', function(request, response){
    response.send('<h1>Hello Estonia</h1>')
});

app.get('/contact', function(request, response){
    response.send('<h3>maksim.hollat@gmail.com</h3>')
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});