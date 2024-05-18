import type { Request, Response } from 'express';
import axios from 'axios';
import { RESERVATION_API_URL, ADD_RESERVATION, DELETE_RESERVATION, GET_RESERVATION, GET_RESERVATIONS_BY_ID_LOCATAIRE, UPDATE_RESERVATIONS } from '../constants/api.constant';


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

export const getReservation = async (req: Request, res: Response) => {
    const { id_reservation } = req.params;
    axios.get(RESERVATION_API_URL + GET_RESERVATION.replace('${id_reservation}', id_reservation))
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error('Error during getReservation:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}


export const getReservationsByIdLocataire = async (req: Request, res: Response) => {
    const { id_locataire } = req.params;
    axios.get(RESERVATION_API_URL + GET_RESERVATIONS_BY_ID_LOCATAIRE.replace('${id_locataire}', id_locataire))
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error('Error during getReservation:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}


export const updateReservation = async (req: Request, res: Response) => {
    try {
        const { id_reservation } = req.params;
        const { type } = req.body;

        axios.put(RESERVATION_API_URL + UPDATE_RESERVATIONS.replace('${id_reservation}', id_reservation), { type })
            .then(response => {
                res.status(200).json(response.data);
            })
            .catch(error => {
                console.error('Error during getReservation:', error);
                res.status(500).json({ message: 'Internal server error' });
            });
    } catch (error) {
        console.error('Error during updateReservation:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}