import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db.connection';

interface ProprieteAttributes {
    id_propriete?: number;
    type: "appartement" | "maison";
    ville: string;
    surface: number;
    prix: number;
    description: string;
    id_proprietaire: number;
}

class Propriete extends Model<ProprieteAttributes> implements ProprieteAttributes {
    id_propriete?: number;
    type!: "appartement" | "maison";
    ville!: string;
    surface!: number;
    prix!: number;
    description!: string;
    id_proprietaire!: number;
}

Propriete.init(
{
    id_propriete: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    type: {
    type: DataTypes.ENUM("appartement", "maison"),
    },
    ville: {
    type: DataTypes.STRING,
    },
    surface: {
    type: DataTypes.INTEGER,
    },
    prix: {
    type: DataTypes.INTEGER,
    },
    description: {
    type: DataTypes.STRING,
    },
    id_proprietaire: {
    type: DataTypes.INTEGER,
    },
},
{
    tableName: "proprietes",
    sequelize: sequelizeConnection,
    timestamps: false
}
);


export default Propriete;