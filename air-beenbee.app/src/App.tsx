import './App.css';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LocataireRegisterPage from './pages/LocataireRegisterPage';
import ProprietaireRegisterPage from './pages/ProprietaireRegisterPage';

import AppBar from './components/AppBar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/register/locataire", element: <LocataireRegisterPage /> },
        { path: "/register/proprietaire", element: <ProprietaireRegisterPage />}
      ],
    }
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
