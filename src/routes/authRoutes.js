import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";

const NavigationStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <NavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <NavigationStack.Screen component={Dashboard} name="Dashboard" />
    </NavigationStack.Navigator>
  );
};

export default AuthRoutes;
