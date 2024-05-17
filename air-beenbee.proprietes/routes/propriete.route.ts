import express from 'express';
import { 
    getPropriete, 
    getProprietes, 
    createPropriete, 
    updatePropriete, 
    deletePropriete 
} from '../services/propriete.service';

var router = express.Router();

router.get('/', getProprietes);

router.get('/:id_propriete', getPropriete);

router.post('/createPropriete', createPropriete);

router.post('/updatePropriete/:id_propriete', updatePropriete);

router.delete('/deletePropriete/:id_propriete', deletePropriete);

export default router;