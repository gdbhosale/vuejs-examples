var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3004);

app.get('/', function(resquest, responce) {
    responce.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat.message', function(message){
        // console.log('New message sent: ' + message);
        io.emit('chat.message', message);
    });
});