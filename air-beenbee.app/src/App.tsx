
import './App.css';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LocataireRegisterPage from './pages/LocataireRegisterPage';
import ProprietaireRegisterPage from './pages/ProprietaireRegisterPage';
import LocataireLoginPage from './pages/LocataireLoginPage';
import PropretaireLoginPage from './pages/ProprietaireLoginPage';
import SearchProprietePage from './pages/SearchProprietePage';
import ReservePage from './pages/ReservePage';

import AppBar from "./components/AppBar";
import AddProprietePage from './pages/AddProprietePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login/locataire", element: <LocataireLoginPage /> },
        { path: "/login/proprietaire", element: <PropretaireLoginPage /> },
        { path: "/register/locataire", element: <LocataireRegisterPage /> },
        { path: "/register/proprietaire", element: <ProprietaireRegisterPage />},
        { path: "/search", element: <SearchProprietePage />},
        { path: "/reservation/:id_propriete", element: <ReservePage />},
        { path: "/addpropriete", element: <AddProprietePage />}
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
