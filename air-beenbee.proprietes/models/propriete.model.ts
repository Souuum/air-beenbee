import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db.connection';

interface ProprieteAttributes {
    id_propriete?: number;
    type: "appartement" | "maison";
    ville: string;
    surface: number;
    prix: number;
    description: string;
    chambre: number;
    lit: number;
    salle_de_bain: number;
    cuisine: number;
    piscine: boolean;
    wifi: boolean;
    id_proprietaire: number;
}

class Propriete extends Model<ProprieteAttributes> implements ProprieteAttributes {
    id_propriete?: number;
    type!: "appartement" | "maison";
    ville!: string;
    surface!: number;
    prix!: number;
    description!: string;
    chambre!: number;
    lit!: number;
    salle_de_bain!: number;
    cuisine!: number;
    piscine!: boolean;
    wifi!: boolean;
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
    chambre: {
    type: DataTypes.INTEGER,
    },
    lit: {
    type: DataTypes.INTEGER,
    },
    salle_de_bain: {
    type: DataTypes.INTEGER,
    },
    cuisine: {
    type: DataTypes.INTEGER,
    },
    piscine: {
    type: DataTypes.BOOLEAN,
    },
    wifi: {
    type: DataTypes.BOOLEAN,
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