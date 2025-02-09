import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ClubMembershipCard = () => {
  return (
    <View style={styles.container}>
      {/* Outer Shadow Container */}
      {/* Yellow Card */}
      <View style={styles.card}>
        {/* Left Side Text */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Become a Club Member Now!</Text>
          <Text style={styles.subtitle}>Unlock unlimited fun & Growth</Text>
        </View>

        {/* Vertical Line */}
        <View style={styles.verticalLine} />

        {/* Arrow Button */}
        <TouchableOpacity style={styles.arrowButton}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 189, 66, 1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    width: 320,
    height: 79,
    elevation: 5,
    shadowColor: "rgba(255, 18, 109, 1)",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: "rgba(0, 0, 0, 1)",
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
    marginTop: 2,
    fontWeight: 500,
  },
  verticalLine: {
    height: 46,
    width: 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 15,
  },
  arrowButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default ClubMembershipCard;
