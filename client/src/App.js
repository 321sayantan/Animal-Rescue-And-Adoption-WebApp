import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/httpRequests';
import Root from './pages/Root';
import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import MainErrorFallback from './components/UI/MainErrorFallback';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdoptPet from './pages/AdoptPet';
import PetDetailsPage from './pages/PetDetailsPage';
import AddNewVetPost from './pages/AddNewVetPost';
import RescueVet from './pages/RescueVet';
import RescueListPage from './pages/RescueListPage';
import RescueDetailsPage from './pages/RescueDetailsPage';
import ChangePassword from './pages/ResetPasswordMail';
import ResetPswrdFinalPage from './pages/ResetPasswordPswrd';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import { loader as rootLoader } from './pages/Root';
import { loader as loadPetPosts } from './pages/AdoptPet';
import { loader as loadRescuePosts } from './pages/RescueListPage';
import { loader as loadPostDetails } from './pages/PetDetailsPage';
import { loader as loadRescueDetalis } from './pages/RescueDetailsPage';

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
          { path: ':id', element: <PetDetailsPage />, loader: loadPostDetails },
          { path: 'register-new-vet', element: <AddNewVetPost /> }
        ]
      },
      {
        path: 'rescue',
        children: [
          { index: true, element: <RescueVet /> },
          { path: 'rescue-list', element: <RescueListPage />, loader: loadRescuePosts },
          { path: ':id', element: <RescueDetailsPage />, loader: loadRescueDetalis }
        ]
      },
      {
        path: 'profile',
        element: <UserProfile />,
      },
      { path: 'profile/edit', element: <EditProfile /> },
    ],
  },
  {
    path: 'forgot-password',
    element: <ChangePassword />
  },
  {
    path: 'reset-password',
    element: <ResetPswrdFinalPage />
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
