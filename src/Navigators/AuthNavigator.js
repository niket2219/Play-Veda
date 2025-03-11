import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Easing } from "react-native-reanimated";
import Doublewala from "../Components/AuthStack/DoubleWala";
import Login from "../Components/AuthStack/Login";
import MoreDetails from "../Components/AuthStack/MoreDetails";
import { NavigationContainer } from "@react-navigation/native";

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

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          transitionSpec: animation,
        }}
      >
        <Stack.Screen
          name="AuthSlider"
          component={Doublewala}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoreDetails"
          component={MoreDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
