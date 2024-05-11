import type { Request, Response } from 'express';
import Locataire from "../models/locataire.model";


export const login = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
        const locataire = await Locataire.findOne({
            where: {
                username: username,
                password: password
            }
        });
        if (!locataire) {
            return res.status(404).json({ message: "Locataire not found" });
        }
        return res.status(200).json(locataire);
    }
    catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const { nom, prenom, username, email, password } = req.body;
        // Check if locataire already exists
        const locataireExists = await Locataire.findOne({
            where: {
                username: username
            }
        });
        if (locataireExists) {
            return res.status(400).json({ message: 'Locataire already exists' });
        }
        const locataire = await Locataire.create({
            nom: nom,
            prenom: prenom,
            username: username,
            email: email,
            password: password
        });
        return res.status(201).json(locataire);
    }
    catch (error) {
        console.error('Error during register:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}