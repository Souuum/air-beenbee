import type { Request, Response } from "express";
import Propriete from "./models/propriete.model";
import proprieteRouter from './routes/propriete.route';

const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;



app.use(cors({ origin: 'http://localhost:5173'}));
app.use(express.json());

app.use('/', proprieteRouter);
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


const Sequelize = require('./db.connection');
const connection = Sequelize.connection;


const dbInit = () => {
  Propriete.sync({ force: false })
}


dbInit();
export default dbInit;