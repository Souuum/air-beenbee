import type { Request, Response } from "express";
import Propriete from "./models/propriete.model";
import proprieteRouter from './routes/propriete.route';

const express = require('express');
const app = express();
const port = 3001;



// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World! from air-beenbee.proprietes')
//   })


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