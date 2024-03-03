/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const contextValue = useMemo(() => {
    return {
      testValue: 1,
    };
  }, []);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
