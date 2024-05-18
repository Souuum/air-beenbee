import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import type { Propriete } from "../types";
interface ProprieteCardProps {
    propriete: Propriete;
    link?: true | false;
}

export const ProprieteCard: React.FC<ProprieteCardProps> = ({ propriete,link }) => {
    return (
        link ? (
        <Link className=" w-fit "  to={`/create-reservation/${propriete.id_propriete}`}>
            <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {propriete.ville} - {propriete.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {propriete.description}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Surface:</strong> {propriete.surface} m²</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Prix:</strong> {propriete.prix} €</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Chambres:</strong> {propriete.chambre}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Lits:</strong> {propriete.lit}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Salles de bain:</strong> {propriete.salle_de_bain}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Cuisines:</strong> {propriete.cuisine}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Piscine:</strong> {propriete.piscine ? 'Oui' : 'Non'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Wi-Fi:</strong> {propriete.wifi ? 'Oui' : 'Non'}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Link>) : (
                        <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {propriete.ville} - {propriete.type}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {propriete.description}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Surface:</strong> {propriete.surface} m²</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Prix:</strong> {propriete.prix} €</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Chambres:</strong> {propriete.chambre}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Lits:</strong> {propriete.lit}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Salles de bain:</strong> {propriete.salle_de_bain}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Cuisines:</strong> {propriete.cuisine}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Piscine:</strong> {propriete.piscine ? 'Oui' : 'Non'}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Wi-Fi:</strong> {propriete.wifi ? 'Oui' : 'Non'}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
        )
    );
};
