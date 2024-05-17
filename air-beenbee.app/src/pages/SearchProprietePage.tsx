import { useAuth } from "../context/AuthContext";
import { ProprieteCard } from "../components/proprieteCard";

const SearchProprietePage = ()  => {
  
  const {authState} = useAuth();

  const { isAuthenticated, user } = authState;

  console.log(user);

  const proprietes :  = []



  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <div>
          <h2>Bienvenue {user?.prenom} {user?.nom}</h2>
          <p>Vous êtes connecté en tant que {user?.role}</p>
        </div>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>
  );

}

export default SearchProprietePage;
