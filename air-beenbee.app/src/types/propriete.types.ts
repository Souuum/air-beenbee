export interface Propriete {
    id_propriete: number;
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