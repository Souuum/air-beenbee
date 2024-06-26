import express from 'express';
import { login, register } from '../services/auth.service';
var router = express.Router();

router.post('/login', login);

router.post('/register', register);

export default router;

