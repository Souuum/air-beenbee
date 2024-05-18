import type { Request, Response } from 'express';
import Propriete from "../models/propriete.model";

export const getPropriete = async (req: Request, res: Response) => {
    try {
        const { id_propriete } = req.params;
        const propriete = await Propriete.findByPk(id_propriete);
        if (!propriete) {
            return res.status(404).json({ message: 'Propriete not found' });
        }
        return res.status(200).json(propriete);
    }
    catch (error) {
        console.error('Error during getPropriete:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProprietes = async (req: Request, res: Response) => {
    try {
        const proprietes = await Propriete.findAll();
        return res.status(200).json(proprietes);
    }
    catch (error) {
        console.error('Error during getProprietes:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProprietesByProprietaire = async (req: Request, res: Response) => {
    try {
        const { id_proprietaire } = req.params;
        const proprietes = await Propriete.findAll({ where: { id_proprietaire } });
        return res.status(200).json(proprietes);
    }
    catch (error) {
        console.error('Error during getProprietesByProprietaire:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProprietesByType = async (req: Request, res: Response) => {
    try {
        const { type } = req.params;
        const proprietes = await Propriete.findAll({ where: { type } });
        return res.status(200).json(proprietes);
    }
    catch (error) {
        console.error('Error during getProprietesByType:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProprietesByVille = async (req: Request, res: Response) => {
    try {
        const { ville } = req.params;
        const proprietes = await Propriete.findAll({ where: { ville } });
        return res.status(200).json(proprietes);
    }
    catch (error) {
        console.error('Error during getProprietesByVille:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createPropriete = async (req: Request, res: Response) => {
    try {
        const { type, ville, surface, prix, description, chambre, lit, salle_de_bain, cuisine, wifi, piscine, id_proprietaire } = req.body;

        const propriete = await Propriete.create({
            type,
            ville,
            surface,
            prix,
            description,
            chambre,
            lit,
            salle_de_bain,
            cuisine,
            wifi,
            piscine,
            id_proprietaire
        });
        return res.status(201).json(propriete);
    }
    catch (error) {
        console.error('Error during createPropriete:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const updatePropriete = async (req: Request, res: Response) => {
    try {
        const { id_propriete } = req.params;
        const { type, ville, surface, prix, description, id_proprietaire } = req.body;

        const propriete = await Propriete.findByPk(id_propriete);
        if (!propriete) {
            return res.status(404).json({ message: 'Propriete not found' });
        }
        propriete.type = type;
        propriete.ville = ville;
        propriete.surface = surface;
        propriete.prix = prix;
        propriete.description = description;
        propriete.id_proprietaire = id_proprietaire;

        await propriete.save();
        return res.status(200).json(propriete);
    }
    catch (error) {
        console.error('Error during updatePropriete:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deletePropriete = async (req: Request, res: Response) => {
    try {
        const { id_propriete } = req.params;
        const propriete = await Propriete.findByPk(id_propriete);
        if (!propriete) {
            return res.status(404).json({ message: 'Propriete not found' });
        }
        await propriete.destroy();
        return res.status(204).json();
    }
    catch (error) {
        console.error('Error during deletePropriete:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}