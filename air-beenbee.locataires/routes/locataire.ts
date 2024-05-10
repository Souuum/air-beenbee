import express from 'express';
import { getLocataire } from '../services/locataire.service';
var router = express.Router();

router.get('/getLocataire/:id_locataire', getLocataire);

export default router;

