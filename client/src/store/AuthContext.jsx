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
    // console.log("storedJWT", storedJwt);
    setJwt(storedJwt);
    // console.log("JWT", jwt);
    setIsRegistered(storedRegToken);
  }, []);

  useEffect(() => {
    isTokenVerified().then((data) => {
      console.log(data);
      if (!data) {
        logout();
      }
    });
  }, []);

  function login(token) {
    console.log("inside login");
    if (token) {
      setIsAuthenticated(true);
      setJwt(token);
    }
    localStorage.setItem("jwt", token);
  }

  function logout() {
    console.log("inside logout");
    setIsAuthenticated(false);
    setJwt(null);
    localStorage.removeItem("jwt");
  }

  async function isTokenVerified() {
    try {
      const jwt = localStorage.getItem("jwt");
      // console.log(jwt)
      const response = await fetch("http://localhost:5000/user/validateUser", {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      const result = await response.json();
      console.log(result.msg);

      return result.verified;
    } catch (error) {
      console.log(error);
    }
  }

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
