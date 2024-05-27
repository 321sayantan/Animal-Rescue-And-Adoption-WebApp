import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import { loader as rootLoader } from './pages/Root';
import MainErrorFallback from './components/UI/MainErrorFallback';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdoptPet from './pages/AdoptPet';
import PetDetailsPage from './pages/PetDetailsPage';

import { loader as loadPetPosts } from './pages/AdoptPet';
import { loader as loadPostDetails } from './pages/PetDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <MainErrorFallback />,
    loader: rootLoader,
    children: [
      { path: '', index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <RegisterPage /> },
      {
        path: 'adopt',
        children: [
          { index: true, element: <AdoptPet />, loader: loadPetPosts },
          { path: ':id', element: <PetDetailsPage />, loader: loadPostDetails }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
