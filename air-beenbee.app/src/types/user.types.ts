export interface User {
    prenom: string;
    nom: string;
    role: 'locataire' | 'proprietaire';
    email: string;
    username: string;
    id: number;
}