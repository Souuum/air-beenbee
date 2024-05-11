
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/LocataireRegisterPage'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      
    },
    {path: "/register/locataire",
    element: <RegisterPage/>,
  }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
