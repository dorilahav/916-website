import mongoose from 'mongoose';

export default () => {
  const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/birthday';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, options, (error) => {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });
};
