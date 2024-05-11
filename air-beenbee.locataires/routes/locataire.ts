import express from 'express';
import { getLocataire, updateLocataire } from '../services/locataire.service';
var router = express.Router();

router.get('/:id_locataire', getLocataire);

router.post('/updateLocataire/:id_locataire', updateLocataire);

export default router;

