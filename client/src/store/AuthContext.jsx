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

  function register() {
    const token = Math.random().toString(32).substring(2, 15);
    setIsRegistered(token);
    localStorage.setItem("reg-token", token);
  }

  // function getCookie(cname) {
  //   console.log(47,document.cookie)
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(";");
  //   for (let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) === " ") {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) === 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  const authValue = {
    isAuthenticated,
    isRegistered,
    jwt,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
