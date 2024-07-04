import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jwt, setJwt] = useState(null);
  const [isRegistered, setIsRegistered] = useState(null);

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");
    const storedRegToken = localStorage.getItem("reg-token");
    if (storedJwt === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    setJwt(storedJwt);
    setIsRegistered(storedRegToken);
  }, []);

  // useEffect(() => {
  //   if (isTokenExpired()) {
  //     logout()
  //   }
  // });

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

  // async function isTokenExpired() {
  //   try {
  //     const response = await fetch("http://localhost:5000/user/validateUser", {
  //       headers: {
  //         'authorization': `Bearer ${jwt}`,
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result);

  //     return result.verified === false ? true : false;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const authValue = {
    isAuthenticated,
    isRegistered,
    jwt,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
