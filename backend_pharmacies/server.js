









/*let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});*/


/*http.listen30003000, () => {
    console.log('Listening on port *:30003000');
});*/





const http = require('http');
const app = require('./app');



const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

const io = require('socket.io')(server);



io.on('connection', function(socket) {

  
  //console.log("voici l'id de la socket envoyé...:::::::::::::::::::::::::::::!!");
  //console.log(socket.id);
 
 // console.log("voici la fin de la socket envoyé...:::::::::::::::::::::::::::::!!");

  socket.on('chat-message', function(data) {
    
    //console.log(data.message);
    io.emit('MESSAGE', data)
    console.log(" voici les données renvoyées::::::!!");
    console.log(data.message);
});


socket.on('typing', function(username) {
  console.log("typing écouté avec succèss..............!!!!")
  
  io.emit('typing', username)
});

socket.on('stopTyping', function(username) {
  
  
  io.emit('stopTyping',  username )
});

socket.on('joigned', function(username) {
  
  
  io.emit('joigned',  username )
  console.log("/////////////joigned")
  console.log(username)
});
});

server.listen(port);







/* const http = require('http');
const app=require('./app');


app.set('port', process.env.PORT ||30003000);
const server = http.createServer(app);

server.listen(process.env.PORT ||30003000);*/



