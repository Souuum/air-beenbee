import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { Propriete, Reservation } from '../types';
import { Button } from '@mui/material';
import { ProprieteCard } from '../components/ProprieteCard';
import { ReservationCard } from '../components/ReservationCard';

const Reservation = () => {
    const { authState } = useAuth();
    const { isAuthenticated, user } = authState;
    const { id_reservation } = useParams<{ id_reservation: string }>();
    const [propriete, setPropriete] = useState<Propriete | null>(null);
    const [reservation, setReservation] = useState<Reservation>();

    const getPropriete = async (id_propriete : number) => {
        try {
            const response = await fetch(`http://localhost:3001/${id_propriete}`);
            if (response.ok) {
                const data = await response.json();
                setPropriete(data);
            }
        } catch (error) {
            console.error('An error occurred while fetching propriete:', error);
        }
    };

    const getReservation = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${id_reservation}`);
            if (response.ok) {
                const data = await response.json();
                setReservation(data);
                if (data.id_locataire === user?.id) {
                    getPropriete(data.id_propriete);
                }
            }
        } catch (error) {
            console.error('An error occurred while fetching reservation:', error);
        }
    }

    useEffect(() => {
        getReservation()
    }, []);

    const updateReservation = async (type: string) => {
        try {
            const response = await fetch(`http://localhost:3000/updateReservation/${id_reservation}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type,
                }),
            });

            if (response.ok) {
                console.log('Reservation updated');
            } else {
                console.log('Reservation update failed');
            }
        } catch (error) {
            console.error('An error occurred while updating reservation:', error);
        }
    }

    const deleteReservation = async () => {
        try {
            const response = await fetch(`http://localhost:3000/deleteReservation/${id_reservation}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Reservation deleted');
            } else {
                console.log('Reservation deletion failed');
            }
        } catch (error) {
            console.error('An error occurred while deleting reservation:', error);
        }
    }

    const handleCancel = () => {
        if (reservation) {
            deleteReservation();
        }
    }

    const handleAccept = () => {
        if (reservation) {
            updateReservation('acceptée');
        }
    }

    const handleReject = () => {
        if (reservation) {
            updateReservation('refusée');
        }
    }

    return (
        <div>
            {isAuthenticated && user?.role === "locataire"  && propriete && reservation ? (
                <div>
                    <h1>Demande de réservation</h1>
                   <ProprieteCard propriete={propriete} />
                    <ReservationCard reservation={reservation} />
                    <div className="flex ">

                        <Button variant="contained" color="primary" onClick={handleCancel}>
                            Annuler
                        </Button>
                    </div>
                </div>
            ) : isAuthenticated && user?.role === "proprietaire"  && propriete && reservation ?(
                <div>
                    <h1>Demande de réservation</h1>
                     <ProprieteCard propriete={propriete} />
                    <ReservationCard reservation={reservation} />
                    <div className="flex ">
                        <Button variant="contained" color="primary" onClick={handleAccept}>
                            Accepter
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleReject}>
                            Refuser
                        </Button>
                    </div>
                </div>
            ) : (
                <p>Vous n'êtes pas connecté</p>
            )}
        </div>
    );
};

export default Reservation;
