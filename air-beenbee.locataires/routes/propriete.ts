import express from 'express';
import { getPropriete, getProprietes } from '../services/propriete.service';
var router = express.Router();

router.get('/', getProprietes);

router.get('/:id_propriete', getPropriete);

export default router;