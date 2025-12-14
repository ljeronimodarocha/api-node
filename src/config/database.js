import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL || "mongodb://admin:admin@localhost:27017/test";

const connect = () => mongoose.connect(mongodbUrl);

const close = () => mongoose.connection.close();

export default {
  connect,
  connection: mongoose.connection,
  close,
};
