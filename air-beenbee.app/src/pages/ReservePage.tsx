import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { Propriete } from '../types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, Button, Box } from '@mui/material';

const Reservation = () => {
    const { authState } = useAuth();
    const { isAuthenticated, user } = authState;
    const { id_propriete } = useParams<{ id_propriete: string }>();
    const [propriete, setPropriete] = useState<Propriete | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const getPropriete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/propriete/${id_propriete}`);
            if (response.ok) {
                const data = await response.json();
                setPropriete(data);
            }
        } catch (error) {
            console.error('An error occurred while fetching propriete:', error);
        }
    };

    useEffect(() => {
        getPropriete();
    }, [id_propriete]);

    const sendReservationRequest = async () => {
        try {
            const response = await fetch('http://localhost:3000/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_propriete,
                    id_locataire: user?.id,
                    date_debut: startDate,
                    date_fin: endDate,
                }),
            });

            if (response.ok) {
                console.log('Reservation request sent');
            } else {
                console.log('Reservation request failed');
            }
        } catch (error) {
            console.error('An error occurred while sending reservation request:', error);
        }
    }

    const handleReservation = () => {
        if (startDate && endDate) {
            if (startDate < endDate) {

                console.log('Reservation request sent');
            } else {
                console.log('Invalid dates');
            }
        }
    };

    return (
        <div>
            <h1>Réserver la propriété {id_propriete}</h1>
            {isAuthenticated && user?.role === "locataire" ? (
                <div>
                    <h1>Reservation Page</h1>
                    <div className="flex ">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={(newValue) => setStartDate(newValue)}
                            
                            />
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => setEndDate(newValue)}
                            
                            />
                        </LocalizationProvider>
                        <Button variant="contained" color="primary" onClick={handleReservation}>
                            Réserver
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
