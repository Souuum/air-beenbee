import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db.connection';

interface ProprietaireAttributes {
  id_proprietaires?: string;
  nom: string;
  prenom: string;
  username: string;
  email: string;
  password: string;
}

class Proprietaire extends Model<ProprietaireAttributes> implements ProprietaireAttributes {
  public id_proprietaires?: string;
  public nom!: string;
  public prenom!: string;
  public username!: string;
  public email!: string;
  public password!: string;
}

Proprietaire.init(
  {
    id_proprietaires: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
    },
    prenom: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "proprietaires",
    sequelize: sequelizeConnection,
    timestamps: false
  }
);


export default Proprietaire;