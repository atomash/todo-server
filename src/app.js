import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import api from './api';
const app = express();

mongoose.connect('mongodb://tomash:test12345@ds145438.mlab.com:45438/todotz', {
    useMongoClient: true,
});
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log("Connected to database");
});
mongoose.connection.on('error', (err) => {
    console.log('Connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('database disconnected');
});

app.use(logger('[:date[clf]] ":method :url HTTP/:http-version" :status  :response-time ms'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res) => {
  res
    .status(err.status || 500)
    .json({
      message: err.message
    });
});

export default app;
