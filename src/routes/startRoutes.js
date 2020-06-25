import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "../pages/Start";

const NavigationStack = createStackNavigator();

const StartRoutes = () => {
  return (
    <NavigationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NavigationStack.Screen component={Start} name="Start" />
    </NavigationStack.Navigator>
  );
};

export default StartRoutes;
