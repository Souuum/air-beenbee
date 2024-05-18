import { Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const HomePage = ()  => {
  
  const {authState} = useAuth();
  const navigate = useNavigate();

  const { isAuthenticated, user } = authState;

  console.log(user);

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
