import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/MainScreens/HomeScreen";
import PlayLilaSession from "../Screens/NestedScreens/PlayLilaSession";
import { Easing } from "react-native-reanimated";

const Stack = createStackNavigator();

const animation = {
  open: {
    animation: "timing",
    config: {
      duration: 300,
      easing: Easing.out(Easing.ease),
    },
  },
  close: {
    animation: "timing",
    config: {
      duration: 300,
      easing: Easing.in(Easing.ease),
    },
  },
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: true,
        transitionSpec: animation,
      }}
    >
      <Stack.Screen
        name="MainHome"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlayLilaSession"
        component={PlayLilaSession}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
