import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../../screens/Home/Home"

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen"  component={Home} />
            
        </Stack.Navigator>
    )
};

export default HomeStack;
