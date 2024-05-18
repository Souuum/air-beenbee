import { useAuth } from "../context/AuthContext";
import { Form, FormField } from "../components/Form";

const AddProprietePage = () => {
  const { authState } = useAuth();

  const { isAuthenticated, user } = authState;
//TODO 
// Récupérer les ID propriété et propriétaire
// Créer le bouton dans Home pour rediriger sur cette page
  const formStructure: FormField[] = [
    { name: "ville", label: "Ville", type: "text" },
    { name: "surface", label: "Surface", type: "number" },
    { name: "type", label: "Type", type: "select", options: [{"label": "Appartement", "value": "appartement"}, {"label": "Maison", "value":"maison"}] },
    { name: "prix", label: "Prix", type: "number" },
    { name: "description", label: "Description", type: "text" },
    { name: "lit", label: "Lit", type: "text" },
    { name: "chambre", label: "Chambre", type: "text" },
    { name: "salle_de_bain", label: "Salle de bain", type: "number" },
    { name: "cuisine", label: "Cuisine", type: "number" },
    { name: "piscine", label: "Piscine", type: "select", options: [{"label": "Oui", "value":1}, {"label": "Non", "value":0}] },
    { name: "wifi", label: "Wifi", type: "select", options: [{"label": "Oui", "value":1}, {"label": "Non", "value":0}] }
  ];

  const handleFormSubmit = async (formData: { [key: string]: any }) => {
    //send data to backend
    await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <div>
      <h1>Add Page</h1>
      <div className="flex w-full justify-center">
        <Form
          formStructure={formStructure}
          label="Ajouter"
          onSubmit={handleFormSubmit}
        />
      </div>
      {isAuthenticated && user?.role === "proprietaire" ? (
        <div>
          <div className="flex w-full justify-center">
            <Form
              formStructure={formStructure}
              label="Ajouter"
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      ) : (
        <h1>Vous n'êtes pas autorisé à acceder à cette page.</h1>
      )}
    </div>
  );
};

export default AddProprietePage;
