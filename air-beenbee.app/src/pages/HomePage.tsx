import { Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Propriete, Reservation } from "../types";
import { ReservationCard } from "../components/ReservationCard";


const HomePage = ()  => {
  
  const {authState} = useAuth();
  const navigate = useNavigate();

  const { isAuthenticated, user } = authState;

  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [proprietes, setProprietes] = useState<Propriete[]>([]);

  const getReservationByLocataire = async () => {
    try {
      const response = await fetch(`http://localhost:3000/getReservationsByIdLocataire/${user?.id}`);
      if (response.ok) {
        const data = await response.json();
        setReservations(data);
        console.log(data);
      }
    } catch (error) {
      console.error('An error occurred while fetching reservations:', error);
    }
  }

  const getPropriete = async (id_propriete: number) => {
    try {
      const response = await fetch(`http://localhost:3001/${id_propriete}`);
      if (response.ok) {
        const data = await response.json();
        setProprietes([...proprietes, data]);
        console.log(data)
      }
    } catch (error) {
      console.error('An error occurred while fetching propriete:', error);
    }
  }

  const getProprietesByProprietaire = async () => {
    try {
      const response = await fetch(`http://localhost:3001/proprietaire/${user?.id}`);
      if (response.ok) {
        const data = await response.json();
        setProprietes(data);
        console.log(data);
      }
    } catch (error) {
      console.error('An error occurred while fetching propriete:', error);
    }
  }

  const getReservationByPropriete = async (id_propriete: number) => {
    try {
      const response = await fetch(`http://localhost:3002/reservation/getReservationsByIdLocataire/${user?.id}`);
      if (response.ok) {
        const data = await response.json();
        setReservations([...reservations, data]);
        console.log(data);
      }
    } catch (error) {
      console.error('An error occurred while fetching reservations:', error);
    }
  }

  useEffect(() => {
    if (user?.role === "locataire"){
      getReservationByLocataire();
      reservations.map((reservation) => {
        getPropriete(reservation.id_propriete);
      });
    }
    else {
      getProprietesByProprietaire().then(() => {
        proprietes.map((propriete) => {
          getReservationByPropriete(propriete.id_propriete);
        });
      });


    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated && user?.role==="proprietaire" ? (
        <div>
          <h2>
            Bienvenue {user?.prenom} {user?.nom}
          </h2>
          <p>Vous êtes connecté en tant que {user?.role}</p>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/addpropriete')}
          >
            Ajouter une propriété
          </Button>
          <div>
              <h1> Mes demandes de réservation</h1>
              <div className="grid grid-cols-6 gap-4 ">
              {reservations.map((reservation,i) => (
                <ReservationCard key={i} reservation={reservation} link />
              ))}
              </div>
            </div>
        </div>
        
      ) : isAuthenticated && user?.role==="locataire" ? (
        <div>
          <h2>Bienvenue {user?.prenom} {user?.nom}</h2>
          <p>Vous êtes connecté en tant que {user?.role}</p>
          <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/search')}
          >
            Rechercher une propriété
            </Button>

            <div>
              <h1> Mes réservation</h1>
              <div className="grid grid-cols-6 gap-4 ">
              {reservations.map((reservation,i) => (
                <ReservationCard key={i} reservation={reservation} link />
              ))}
              </div>
            </div>
        </div>
      
      )
      :
      (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>
  );
};

export default HomePage;
