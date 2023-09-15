require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();

//Middlewares para parsear el body de una petición.
// app.use(express.urlencoded({ extended: true}));

// app.get('/', (req, res) => res.status(200).json ({ message: "Hola Mundo"}));



