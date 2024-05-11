import express from 'express';
import { getProprietaire } from '../services/proprietaire.service';
var router = express.Router();

router.get('/getProprietaire/:id_Proprietaire', getProprietaire);

export default router;