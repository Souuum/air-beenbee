import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db.connection';

interface ReservationAttributes {
    id_reservation?: number;
    type: "en cours" | "acceptée" | "refusée";
    date_debut: Date;
    date_fin: Date;
    date_creation: Date;
    id_propriete: number;
    id_locataire: number;
}

class Reservation extends Model<ReservationAttributes> implements ReservationAttributes {
    id_reservation?: number;
    type!: "en cours" | "acceptée" | "refusée";
    date_debut!: Date;
    date_fin!: Date;
    date_creation!: Date;
    id_propriete!: number;
    id_locataire!: number;
}

Reservation.init(
    {
        id_reservation: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.ENUM("en cours", "acceptée", "refusée"),
            allowNull: false,
        },
        date_debut: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_fin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_creation: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_propriete: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'proprietes',
                key: 'id_propriete'
            }
        },
        id_locataire: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'locataires',
                key: 'id_locataire'
            }
        },
    },
    {
        tableName: "reservations",
        sequelize: sequelizeConnection,
        timestamps: false,
    }
);

export default Reservation;