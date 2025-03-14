import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopScreen from "../../Components/Molecules/TopScreen";
import MemberShipToast from "../../Components/Atoms/MemberShipToast";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <TopScreen />
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          position: "absolute",
          bottom: 70,
        }}
      >
        <MemberShipToast />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    minHeight: "52%",
  },
  membershipCard: {
    marginTop: -45,
  },
});

export default HomeScreen;
