/* eslint-disable no-console */
import mongoose from 'mongoose';

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_HOST,
  MONGODB_DOCKER_PORT,
  MONGODB_DATABASE,
} = process.env;

const connect = () => {
  const url = 
    `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}
    :${MONGODB_DOCKER_PORT}/${MONGODB_DATABASE}?authSource=admin`;

  mongoose.connect(url, {
    useNewUrlParser: true,
  });

  mongoose.connection.once('open', async () => {
    console.log('Connected to database');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to database  ', err);
  });
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once('close', async () => {
    console.log('Diconnected  to database');
  });
};

export {
  connect,
  disconnect,
};
