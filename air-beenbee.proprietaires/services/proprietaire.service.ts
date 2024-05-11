import type { Request, Response } from 'express';
import Proprietaire from "../models/Proprietaire.model";

export const getProprietaire = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const proprietaire = await Proprietaire.findByPk(id);
        if (!proprietaire) {
            return res.status(404).json({ message: 'Proprietaire not found' });
        }
        return res.status(200).json(proprietaire);
    }
    catch (error) {
        console.error('Error during getProprietaire:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}