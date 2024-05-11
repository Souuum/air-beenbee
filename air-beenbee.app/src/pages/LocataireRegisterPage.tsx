
import { FormField, Form} from "../components/Form";


const RegisterPage = ()  => {

  const formStructure: FormField[] = [
    { name: 'prenom', label: 'Prénom', type: 'text' },
    { name: 'nom', label: 'Nom', type: 'text' },
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'password', label: 'Mot de passe', type: 'password' },
  ];

    const handleFormSubmit = async (formData: { [key: string]: any }) => {
      //send data to backend
      await fetch('http://localhost:3003/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          console.log('Inscription réussie');
        } else {
          console.log('Inscription échouée');
        }
      });
    };

    return (
  
      <div className="">
        <h1> Inscription</h1>
          <div className="w-max">
          <Form formStructure={formStructure} onSubmit={handleFormSubmit} />
          </div>
      </div>
  
    )
  }
  
  export default RegisterPage;
  