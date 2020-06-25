import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    async function loadStoregedData() {
      const isLogged = await AsyncStorage.getItem("@Receitas:logged");

      if (isLogged) {
        setFirstTime(true);
      }
    }

    loadStoregedData();
  }, []);

  async function handleSubmit() {
    await AsyncStorage.setItem("@Receitas:logged", "true");
    setFirstTime(true);
  }
  return (
    <AuthContext.Provider value={{ logged: !!firstTime, handleSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
