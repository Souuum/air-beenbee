import { Card, CardContent } from "@mui/material";

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

interface ProprieteCardProps {
    propriete: Propriete;
}

export const ProprieteCard: React.FC<ProprieteCardProps> = ({ propriete }) => {
    return (
        <Card>
            <CardContent>
                <h2>{propriete.ville + '' + propriete.type}</h2>
                <p>{propriete.description}</p>
            </CardContent>
        </Card>
    );
};
