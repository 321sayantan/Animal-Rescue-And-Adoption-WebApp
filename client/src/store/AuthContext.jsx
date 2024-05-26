import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jwt, setJwt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");
    if (storedJwt === null) {
      setIsAuthenticated(false);
    }else{
      setIsAuthenticated(true);
    }
    setJwt(storedJwt);
    setIsLoading(false);
  }, []);

  function login(token) {
    if (token) {
      setIsAuthenticated(true);
      setJwt(token);
    }
    localStorage.setItem("jwt", token);
  }

  function logout() {
    setIsAuthenticated(false);
    setJwt(null);
    localStorage.removeItem("jwt");
  }

  const authValue = {
    isAuthenticated,
    isLoading,
    jwt,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
