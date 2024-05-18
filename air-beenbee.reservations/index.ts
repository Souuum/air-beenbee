import type { Request, Response } from "express";
import Reservation from "./models/reservation.model";
import ReservationRouter from './routes/reservation.route';

const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/', ReservationRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const Sequelize = require('./db.connection');
const connection = Sequelize.connection;


const dbInit = () => {
  Reservation.sync({ force: false })
}

dbInit();
export default dbInit;