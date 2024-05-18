import type { Request, Response } from 'express';
import Propriete from "../models/propriete.model";
import { Op } from 'sequelize';

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

export const getProprietesInPriceRange = async (req: Request, res: Response) => {
    try {
        const { min, max } = req.params;
        const proprietes = await Propriete.findAll({ where: { prix: { [Op.between]: [min, max] } } });
        return res.status(200).json(proprietes);
    }
    catch (error) {
        console.error('Error during getProprietesInPriceRange:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const searchProprietes = async (req: Request, res: Response) => {
    try {
        const { ville, type, minPrice, maxPrice } = req.query;

        const whereClause: any = {};

        if (ville) {
            whereClause.ville = ville;
        }

        if (type) {
            whereClause.type = type;
        }

        if (minPrice && maxPrice) {
            whereClause.prix = {
                [Op.between]: [Number(minPrice), Number(maxPrice)]
            };
        } else if (minPrice) {
            whereClause.prix = {
                [Op.gte]: Number(minPrice)
            };
        } else if (maxPrice) {
            whereClause.prix = {
                [Op.lte]: Number(maxPrice)
            };
        }

        const proprietes = await Propriete.findAll({ where: whereClause });

        return res.status(200).json(proprietes);
    } catch (error) {
        console.error('Error during searchProprietes:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

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
        const { type, ville, surface, prix, description
            , chambre, lit, salle_de_bain, cuisine, piscine, wifi
            , id_proprietaire } = req.body;

        const propriete = await Propriete.findByPk(id_propriete);
        if (!propriete) {
            return res.status(404).json({ message: 'Propriete not found' });
        }
        const proprieteToUpdate = new Propriete();
        proprieteToUpdate.type = type;
        proprieteToUpdate.ville = ville;
        proprieteToUpdate.surface = surface;
        proprieteToUpdate.prix = prix;
        proprieteToUpdate.description = description;
        proprieteToUpdate.chambre = chambre;
        proprieteToUpdate.lit = lit;
        proprieteToUpdate.salle_de_bain = salle_de_bain;
        proprieteToUpdate.cuisine = cuisine;
        proprieteToUpdate.piscine = piscine;
        proprieteToUpdate.wifi = wifi;
        proprieteToUpdate.id_proprietaire = id_proprietaire;

        await propriete.update(proprieteToUpdate);
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