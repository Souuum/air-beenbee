import type { Request, Response } from 'express';
import axios from 'axios';
import { RESERVATION_API_URL, ADD_RESERVATION, DELETE_RESERVATION, GET_RESERVATIONS } from '../constants/api.constant';


export const addReservation = async (req: Request, res: Response) => {
    const { id_propriete, id_locataire, date_debut, date_fin } = req.body;
    axios.post( RESERVATION_API_URL + ADD_RESERVATION, {
        id_propriete: id_propriete,
        id_locataire: id_locataire,
        date_debut: date_debut,
        date_fin: date_fin
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
    const { id_propriete, id_locataire } = req.body;
    axios.post(RESERVATION_API_URL + DELETE_RESERVATION, {
        id_propriete: id_propriete,
        id_locataire: id_locataire
    })
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
