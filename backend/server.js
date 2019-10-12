const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const PORT = 4000;

let User = require('./model/user.model');
let userRouter = require('./routes/user.routes.js');

let Item = require('./model/item.model');
let itemRouter = require('./routes/items.routes.js');

let History = require('./model/history.model');
let historyRouter = require('./routes/history.routes.js');

app.use(cors());
app.use(bodyParser.json());


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Jasmine:ilgeah01@cluster0-yggkz.gcp.mongodb.net/user', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});


app.use('/users', userRouter);
app.use('/items', itemRouter);
app.use('/history', historyRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
