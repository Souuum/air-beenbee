import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db.connection';

interface ProprieteEquipmentAttributes {
    id_propriete_equipement?: number;
    chambre: number;
    lit: number;
    salle_de_bain: number;
    cuisine: number;
    piscine: boolean;
    wifi: boolean;
    id_propriete: number;
}

class ProprieteEquipment extends Model<ProprieteEquipmentAttributes> implements ProprieteEquipmentAttributes {
    id_propriete_equipement?: number;
    chambre!: number;
    lit!: number;
    salle_de_bain!: number;
    cuisine!: number;
    piscine!: boolean;
    wifi!: boolean;
    id_propriete!: number;
}

ProprieteEquipment.init(
{
    id_propriete_equipement: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
    id_propriete: {
    type: DataTypes.INTEGER,
    },
},
{
    tableName: "proprietes_equipements",
    sequelize: sequelizeConnection,
    timestamps: false
}
);


export default ProprieteEquipment;