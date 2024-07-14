import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
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
import AdoptPostIsConfirmed from './pages/AdoptPostIsConfirmed';
import RescuePostIsConfirmed from './pages/RescuePostIsConfirmed';
import { loader as rootLoader } from './pages/Root';
import { loader as loadPetPosts } from './pages/AdoptPet';
import { loader as loadRescuePosts } from './pages/RescueListPage';
import { loader as loadPostDetails } from './pages/PetDetailsPage';
import { loader as loadRescueDetalis } from './pages/RescueDetailsPage';
import { loader as userProfileLoader } from './pages/UserProfile';
import { gapi } from "gapi-script";
import { toast } from 'react-toastify';

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
          {
            path: 'register-new-vet', element: (
              <PrivateRoute>
                <AddNewVetPost />
              </PrivateRoute>
            )
          },
          { path: 'accept-adopt-confirmation', element: <AdoptPostIsConfirmed /> }
        ]
      },
      {
        path: 'rescue',
        children: [
          {
            index: true, element: (
              <PrivateRoute>
                <RescueVet />
              </PrivateRoute>
            )
          },
          { path: 'rescue-list', element: <RescueListPage />, loader: loadRescuePosts },
          {
            path: ':id', element: (
              <PrivateRoute>
                <RescueDetailsPage />
              </PrivateRoute>
            ),
            loader: loadRescueDetalis
          },
          { path: 'accept-rescue-confirmation', element: <RescuePostIsConfirmed /> }
        ]
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
        loader: userProfileLoader,
      },
      {
        path: 'profile/edit', element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: userProfileLoader
      },

    ],
  },
  {
    path: 'forgot-password',
    element: <ChangePassword />
  },
  {
    path: 'reset-password/:token',
    element: <ResetPswrdFinalPage />
  },
])

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("jwt");
  useEffect(() => {
    if(!isAuthenticated){
      toast.warning('Please Authenticate to proceed!')
    }
  }, [])
  return isAuthenticated ? children : <Navigate to={"../../login"} />;
}

function App() {

  const initializeGapi = () => {
    gapi.client.init({
      clientId: process.env.GOOGLE_CLIENT_ID,
      scope: "",
    });
  };

  useEffect(() => {
    // load and init google api scripts
    gapi.load("client:auth2", initializeGapi);
  });


  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
