import type { Request, Response } from 'express';
import axios from 'axios';
import { RESERVATION_API_URL, DELETE_RESERVATION, GET_RESERVATIONS, CREATE_RESERVATION } from '../constants/api.constant';


export const addReservation = async (req: Request, res: Response) => {
    const { type, date_debut, date_fin, id_propriete, id_locataire } = req.body;
    axios.post( RESERVATION_API_URL + CREATE_RESERVATION, {
        type: type,
        date_debut: date_debut,
        date_fin: date_fin,
        id_propriete: id_propriete,
        id_locataire: id_locataire
        
    })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error('Error during addReservation:', error);
            res.status(500).json({ message: 'Internal server error' });
        });

}

export const deleteReservation = async (req: Request, res: Response) => {
    const { id_reservation } = req.params;
    
    axios.delete(RESERVATION_API_URL + DELETE_RESERVATION.replace('${id_reservation}', id_reservation))
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error('Error during deleteReservation:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}

export const getReservations = async (req: Request, res: Response) => {
    const { id_locataire } = req.params;
    axios.get(RESERVATION_API_URL + GET_RESERVATIONS.replace('${id_locataire}', id_locataire))
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error('Error during getReservation:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}
