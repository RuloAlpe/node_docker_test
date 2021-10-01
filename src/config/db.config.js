/* eslint-disable no-console */
import mongoose from 'mongoose';

const {
  // DB_USER,
  // DB_PASSWORD,
  DB_HOST,
  // DB_DOCKER_PORT,
  DB_DATABASE,
} = process.env;

mongoose.Promise = Promise;

const connectToDb = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      `mongodb://${DB_HOST}/${DB_DATABASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ).then(() => resolve(DB_DATABASE))
      .catch(err => reject(err));
  });
};

export default connectToDb;


// mongoose.connection.on('connected', () => {
//   console.log('MongoDB Connection Established');
// });

// mongoose.connection.on('reconnected', () => {
//   console.log('MongoDB Connection Reestablished');
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('MongoDB Connection Disconnected');
// });

// mongoose.connection.on('close', () => {
//   console.log('MongoDB Connection Closed');
// });

// mongoose.connection.on('error', error => {
//   console.log('MongoDB ERROR: ' + error);
//   process.exit(1);
// });

// const connectMongo = async () => {
//   let connectionuri = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;
//   await mongoose.connect(connectionuri, {
//     useNewUrlParser: true,
//   });
// };

// export default connectMongo;
