import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db.connection';

interface LocataireAttributes {
  id_locataire: string;
  nom: string;
  prenom: string;
  username: string;
  email: string;
  password: string;
}

class Locataire extends Model<LocataireAttributes> implements LocataireAttributes {
  public id_locataire!: string;
  public nom!: string;
  public prenom!: string;
  public username!: string;
  public email!: string;
  public password!: string;
}

Locataire.init(
{
    id_locataire: {
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
    tableName: "locataires",
    sequelize: sequelizeConnection,
    timestamps: false
}
);


export default Locataire;