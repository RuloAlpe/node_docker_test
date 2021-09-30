import mongoose from 'mongoose';

const connect = () => {
  const url = process.env.MONGO_CONNECTION_STRING;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
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
