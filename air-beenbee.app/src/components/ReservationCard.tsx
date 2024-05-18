import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import type { Reservation } from "../types";

interface ReservationCardProps {
    reservation: Reservation;
    link?: true | false;
}

export const ReservationCard: React.FC<ReservationCardProps> = ({ reservation,link }) => {
    return (
        link ? (
        <Link className=" w-fit "  to={`/reservation/${reservation.id_reservation}`}>
            <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Réservation
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {reservation.date_debut} - {reservation.date_fin}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Prix:</strong> {reservation.prix} €</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1"><strong>Type:</strong> {reservation.type}</Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Link>) : (
                        <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Réservation
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {reservation.date_debut} - {reservation.date_fin}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Prix:</strong> {reservation.prix} €</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1"><strong>Type:</strong> {reservation.type}</Typography>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
        )
    );
};
