import type { Request, Response } from "express";
import Locataire from "./models/locataire.model";
import express from 'express';
// Initialize router
import authRouter from './routes/auth';
import locataireRouter from './routes/locataire';
import reservationRouter from './routes/reservation';
import proprieteRouter from './routes/propriete';

const app = express();
const port = 3003;


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! from air-beenbee.locataires')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.use(express.json());


// Initialize routes
app.use('/auth', authRouter);
app.use('/locataire', locataireRouter);
app.use('/reservation', reservationRouter);
app.use('/propriete', proprieteRouter);

const Sequelize = require('./db.connection');
const connection = Sequelize.connection;


const dbInit = () => {
  Locataire.sync({ force: false })
}

dbInit();
export default dbInit;