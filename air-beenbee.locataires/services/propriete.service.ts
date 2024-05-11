import type { Request, Response } from 'express';
import axios from 'axios';
import { PROPRIETE_API_URL, GET_PROPRIETES, GET_PROPRIETE } from '../constants/api.constant';

export const getProprietes = async (req: Request, res: Response) => {
    console.log('getProprietes');
    axios.get(PROPRIETE_API_URL + GET_PROPRIETES)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error('Error during getProprietes:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}

export const getPropriete = async (req: Request, res: Response) => {
    const { id_propriete } = req.params;
    axios.get(PROPRIETE_API_URL + GET_PROPRIETE.replace('${id_propriete}', id_propriete))
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error('Error during getPropriete:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}


