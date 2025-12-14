import bodyParser from "body-parser";
import express from "express";
import database from "./config/database";
import routes from "./routes/index.js";

const configExpress = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use("/", routes);
  app.database = database;
  return app;
};

export default async () => {
  const app = configExpress();
  await app.database.connect();
  return app;
};
