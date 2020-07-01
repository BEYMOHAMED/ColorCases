const express = require('express'),
	http = require('http'),
	bodyParser = require('body-parser'),
	socketio = require('socket.io')

let database = require('./database').getInstance()
database.sequelize.sync()

const app = express(),
	server = http.createServer(app),
	io = socketio(server);

// EJS
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(express.static('public'));

io.on('connection', (socket) => {
	
	socket.on('click', (obj) => {
		io.emit('changeColor', obj)
	})
})

require('./routes/home.js')(app)

server.listen(3000);