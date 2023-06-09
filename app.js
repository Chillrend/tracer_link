var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

dotenv.config();

var app = express();

app.use(logger('dev'));
app.use(cors({
    origin: ['http://localhost:8000', 'http://127.0.0.1:8000', 'http://tracerstudy.pnj.ac.id', "https://tracerstudy.pnj.ac.id"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
