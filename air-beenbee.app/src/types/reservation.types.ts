export interface Reservation {
    id_reservation: number;
    id_propriete: number;
    id_locataire: number;
    date_debut: string;
    date_fin: string;
    prix: number;
    type: 'en cours' | 'acceptée' | 'refusée';
}