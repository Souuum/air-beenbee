import type { Request, Response } from "express";

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! from air-beenbee.reservations')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

const Sequelize = require('./db.connection');
const connection = Sequelize.connection;


const dbInit = () => {
  
}

dbInit();
export default dbInit;