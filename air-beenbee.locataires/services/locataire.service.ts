import type { Request, Response } from 'express';
import Locataire from "../models/locataire.model";

export const getLocataire = async (req: Request, res: Response) => {
    try {
        const { id_locataire } = req.params;
        const locataire = await Locataire.findByPk(id_locataire);
        if (!locataire) {
            return res.status(404).json({ message: 'Locataire not found' });
        }
        return res.status(200).json(locataire);
    }
    catch (error) {
        console.error('Error during getLocataire:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateLocataire = async (req: Request, res: Response) => {
    try {
        const { id_locataire } = req.params;
        const { nom, prenom, username, email, password } = req.body;
        const locataire = await Locataire.findByPk(id_locataire);
        if (!locataire) {
            return res.status(404).json({ message: 'Locataire not found' });
        }
        const locataireToUpdate = new Locataire();
        locataireToUpdate.nom = nom;
        locataireToUpdate.prenom = prenom;
        locataireToUpdate.username = username;
        locataireToUpdate.email = email;
        locataireToUpdate.password = password;
        await locataire.update(locataireToUpdate);
        return res.status(200).json(locataire);
    }
    catch (error) {
        console.error('Error during updateLocataire:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}