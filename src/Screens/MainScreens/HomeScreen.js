import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopScreen from "../../Components/Molecules/TopScreen";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <TopScreen />
        </View>
        {/* <View style={styles.membershipCard}>
          <ClubMembershipCard />
        </View> */}
      </ScrollView>
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
