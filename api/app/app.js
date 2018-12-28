'use strict';
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import config from './config';
import morgan from 'morgan';
import routes from './REST/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log('Connection with database established...');
  }
});

process.on('SIGINT', () => {
  mongoose.connection.close(function () {
    console.error('Mongoose default connection disconnected through app termination...');
    process.exit(0);
  });
});

routes(app);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}...`);
});
