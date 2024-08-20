import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import HomeStacks from "../stacks/HomeStack/HomeStacks";
import ProfileStack from "../stacks/ProfileStack/ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStacks"
      screenOptions={({ route }) => {
        let iconName;

        switch (route.name) {
          case "HomeStacks":
            iconName = "home";
            break;
         
          default:
            iconName = "person-sharp";
            break;
        }
        return {
          tabBarIcon: ({ color, size, focused }) => {
            // Select the appropriate icon component
            const IconComponent = route.name === "ProfileStack" ? Ionicons : FontAwesome5;

            return (
              <IconComponent name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: '#d79132',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
        };
      }}
    >
      <Tab.Screen
        name="HomeStacks"
        component={HomeStacks}
        options={{ tabBarLabel: 'Home' }}
      />
     
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
