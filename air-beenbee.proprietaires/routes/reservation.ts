import express from 'express';
import { 
    updateReservation, 
    getReservationsByIdLocataire, 
    deleteReservation,
    getReservation
 } from '../services/reservation.service';
var router = express.Router();

router.put('/updateReservation/:id_reservation', updateReservation);

router.get('/getReservationsByIdLocataire/:id_locataire', getReservationsByIdLocataire);

router.get('/:id_reservation', getReservation);

router.delete('/deleteReservation/:id_reservation', deleteReservation);

export default router;
