import express from 'express';
import { 
    getReservation, 
    getReservations,
    getReservationsByIdLocataire, 
    getReservationsByIdPropriete,
    createReservation, 
    updateReservation, 
    deleteReservation 
} from '../services/reservation.service';

var router = express.Router();

router.get('/', getReservations);

router.get('/getReservationsByIdLocataire/:id_locataire', getReservationsByIdLocataire);

router.get('/getReservationsByIdPropriete/:id_propriete', getReservationsByIdPropriete);

router.get('/:id', getReservation);

router.post('/createReservation', createReservation);

router.put('/updateReservation/:id_reservation', updateReservation);

router.delete('/deleteReservation/:id_reservation', deleteReservation);

export default router;