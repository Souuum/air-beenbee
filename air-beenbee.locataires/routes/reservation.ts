import express from 'express';
import { addReservation, getReservations, deleteReservation } from '../services/reservation.service';
var router = express.Router();

router.post('/addReservation', addReservation);

router.delete('/deleteReservation/:id_reservation', deleteReservation);

router.get('/:id_locataire', getReservations);

export default router;
