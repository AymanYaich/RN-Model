import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../../screens/Login";
import SignUp from "../../../screens/SignUp"


const AuthentificationStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="SignUpScreen" component={SignUp}/>
        </Stack.Navigator>
    );
};

export default AuthentificationStack;
