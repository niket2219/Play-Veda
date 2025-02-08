import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRef } from "react";
import Images from "../Utils/Images/Image";
import HomeScreen from "../Screens/MainScreens/HomeScreen";
import ActivitiesScreen from "../Screens/MainScreens/ActivitiesScreen";
import VedaScreen from "../Screens/MainScreens/VedaScreen";

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get("window").width;
const tabWidth = screenWidth / 3;

const AppNavigator = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HOME"
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: {
            position: "absolute",
            top: "77%",
            fontSize: 12,
            fontWeight: 600,
            color: "#000000",
          },
        }}
        screenListeners={({ navigation }) => ({
          state: (e) => {
            const index = e.data.state.index;
            Animated.spring(tabOffsetValue, {
              toValue: (index - 1) * tabWidth,
              useNativeDriver: true,
            }).start();
          },
        })}
      >
        <Tab.Screen
          name={"ACTIVITIES"}
          component={ActivitiesScreen}
          options={{
            tabBarIcon: () => (
              <Image source={Images.ActivitiesIcon} style={styles.icon} />
            ),
          }}
        />
        <Tab.Screen
          name={"HOME"}
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={Images.homeIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name={"VEDA"}
          component={VedaScreen}
          options={{
            tabBarIcon: () => (
              <Image source={Images.VedaIcon} style={styles.icon} />
            ),
          }}
        />
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          { transform: [{ translateX: tabOffsetValue }] },
        ]}
      />
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    height: 74,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 10, height: 10 },
  },
  icon: {
    width: 28,
    height: 28,
    position: "absolute",
    top: "44%",
  },
  indicator: {
    position: "absolute",
    bottom: 68,
    width: 55,
    height: 5,
    backgroundColor: "#000000",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignSelf: "center",
  },
});
