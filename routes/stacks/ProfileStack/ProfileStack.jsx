import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../../../screens/Profile"
const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
           
            <Stack.Screen name="ProfileScreen" component={Profile} />
        </Stack.Navigator>
    )
};

export default ProfileStack;
