import { ProprieteCard } from "../components/ProprieteCard";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import type { Propriete } from "../types";

const SearchProprietePage = ()  => {
  
  const {authState} = useAuth();

  const { isAuthenticated, user } = authState;

  console.log(user);

  const [proprietes,setProprietes] = useState<Propriete[]>([]);

  const getProprietes = async () => {
    try {
      const response = await fetch('http://localhost:3001');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProprietes(data);
      }
    } catch (error) {
      console.error('An error occurred while fetching proprietes:', error);
    }
  }

  useEffect(() => {
    getProprietes();
    console.log(proprietes)
  }, []);

  return (
    <div>
      <h1>Search page</h1>
      {isAuthenticated ? (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {proprietes.map((propriete) => (
                <ProprieteCard key={propriete.id_propriete} propriete={propriete} />
                ))}
            </div>
        </div>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>
  );

}

export default SearchProprietePage;
