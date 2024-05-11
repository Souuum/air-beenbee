import express from 'express';
import { getProprietaire } from '../services/proprietaire.service';
var router = express.Router();

router.get('/:id_proprietaires', getProprietaire);

export default router;