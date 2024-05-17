import express from 'express';
import { 
    getReservation, 
    getReservations,
    getReservationsByIdLocataire, 
    createReservation, 
    updateReservation, 
    deleteReservation 
} from '../services/reservation.service';

var router = express.Router();

router.get('/', getReservations);

router.get('/getReservationsByIdLocataire/:id_locataire', getReservationsByIdLocataire);

router.get('/:id', getReservation);

router.post('/createReservation', createReservation);

router.put('/updateReservation/:id_Reservation', updateReservation);

router.delete('/deleteReservation/:id_reservation', deleteReservation);

export default router;