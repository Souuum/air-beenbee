import type { Request, Response } from 'express';
import Reservation from "../models/reservation.model";

export const getReservation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findByPk(id);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        return res.status(200).json(reservation);
    }
    catch (error) {
        console.error('Error during getReservation:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getReservations = async (req: Request, res: Response) => {
    try {
        const reservations = await Reservation.findAll();
        return res.status(200).json(reservations);
    }
    catch (error) {
        console.error('Error during getReservations:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getReservationsByIdLocataire = async (req: Request, res: Response) => {
    try {
        const { id_locataire } = req.params;

        const reservations = await Reservation.findAll({
            where: { id_locataire }
        });

        if (reservations.length === 0) {
            return res.status(404).json({ message: 'No reservations found for this locataire' });
        }

        return res.status(200).json(reservations);
    } catch (error) {
        console.error('Error during findReservationsByIdLocataire:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createReservation = async (req: Request, res: Response) => {
    try {
        const { type, date_debut, date_fin, id_propriete, id_locataire } = req.body;

        const reservation = await Reservation.create({
            type,
            date_debut,
            date_fin,
            date_creation: new Date(),
            id_propriete,
            id_locataire
        });
        return res.status(201).json(reservation);
    } catch (error) {
        console.error('Error during createReservation:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateReservation = async (req: Request, res: Response) => {
    try {
        const { id_reservation } = req.params;
        const { type } = req.body;

        const reservation = await Reservation.findByPk(id_reservation);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        reservation.type = type;

        await reservation.save();
        return res.status(200).json(reservation);
    } catch (error) {
        console.error('Error during updateReservation:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteReservation = async (req: Request, res: Response) => {
    try {
        const { id_reservation } = req.params;
        const reservation = await Reservation.findByPk(id_reservation);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        await reservation.destroy();

        return res.status(204).json();
    } catch (error) {
        console.error('Error during deleteReservation:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}