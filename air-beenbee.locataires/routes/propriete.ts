import express from 'express';
import { getPropriete, getProprietes } from '../services/propriete.service';
var router = express.Router();

router.get('/getProprietes', getProprietes);

router.get('/getPropriete/:id_propriete', getPropriete);

export default router;