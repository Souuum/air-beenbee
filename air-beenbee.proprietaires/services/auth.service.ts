import type { Request, Response } from 'express';
import Proprietaire from "../models/Proprietaire.model";


export const login = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
        const proprietaire = await Proprietaire.findOne({
            where: {
                username: username,
                password: password
            }
        });
        if (!proprietaire) {
            return res.status(404).json({ message: "Proprietaire not found" });
        }
        return res.status(200).json(proprietaire);
    }
    catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const { nom, prenom, username, email, password } = req.body;
        // Check if proprietaire already exists
        const proprietaireExists = await Proprietaire.findOne({
            where: {
                username: username
            }
        });
        if (proprietaireExists) {
            return res.status(400).json({ message: 'Proprietaire already exists' });
        }
        const proprietaire = await Proprietaire.create({
            nom: nom,
            prenom: prenom,
            username: username,
            email: email,
            password: password
        });
        return res.status(201).json(proprietaire);
    }
    catch (error) {
        console.error('Error during register:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}