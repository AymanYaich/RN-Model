import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthentificationStack from "../routes/stacks/AuthentificationStack/AuthentificationStack"; // Chemin correct vers AuthentificationStack

import TabNavigation from "../routes/tabNavigation/tabNavigation";
import { AuthContext } from "../context/authContext";
const Stack = createStackNavigator();

const RootNavigation = () => {
  const { token, userdata } = React.useContext(AuthContext);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token != null ? (
          <Stack.Screen
            name="Authentification"
            component={AuthentificationStack}
            options={{ headerShown: false }} // Option pour masquer l'en-tête si nécessaire
          />
        ) : (
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{ headerShown: false }} // Option pour masquer l'en-tête si nécessaire
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
