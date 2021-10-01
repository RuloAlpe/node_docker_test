/* eslint-disable no-console */
import express from 'express';
import api from './routes';
import connectToDb from './config/db.config';

const app = express();

connectToDb()
  .then((dbCollection) => {
    console.log(`Connected to DB -> ${dbCollection}`);
    // miscelaneous middlewares
    app.use((req, res, next) => {
      console.log(`Visited url -> ${req.method} `, req.url);
      next();
    });

    app.set('trust proxy', true);
    app.disable('x-powered-by');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api', api);
  })
  .catch(error => console.error(`Error al conectar a la DB -> ${error}`));

module.exports = app;

