import { Request, Response } from "express";
import Locataire from "../models/locataire.model";
const Sequelize = require("../db.config");




const login = async (req: Request, res: Response) => {
    const locataire = await Locataire.findAll();

    res.json(locataire);
}