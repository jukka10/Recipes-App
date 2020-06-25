import React, { useContext } from "react";

import AuthRoutes from "./authRoutes";
import StartRoutes from "./startRoutes";

import AuthContext from "../contexts/authContext";

const Routes = () => {
  const { logged } = useContext(AuthContext);

  return !logged ? <AuthRoutes /> : <StartRoutes />;
};

export default Routes;
