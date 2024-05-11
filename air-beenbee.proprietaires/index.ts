import type { Request, Response } from "express";
import Proprietaire from "./models/Proprietaire.model";
import express from 'express';

// Initialize router
import authRouter from './routes/auth';
import proprietaireRouter from './routes/proprietaire';
import reservationRouter from './routes/reservation';
import proprieteRouter from './routes/propriete';

const app = express();
const port = 3002;

app.use(express.json());

// Initialize routes
app.use('/auth', authRouter);
app.use('/proprietaire', proprietaireRouter);
app.use('/reservation', reservationRouter);
app.use('/propriete', proprieteRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! from air-beenbee.proprietaires')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const Sequelize = require('./db.connection');
const connection = Sequelize.connection;


const dbInit = () => {
  Proprietaire.sync({ force: false })
}

dbInit();
export default dbInit;