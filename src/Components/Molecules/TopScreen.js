import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TopScreen = () => {
  return (
    <LinearGradient
      colors={["#FF126D", "#203AFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.menubar}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Text style={{ color: "white", fontSize: 14 }}>Niket</Text>
          <FontAwesome name="user-o" size={20} color="white" />
        </View>
      </View>
      <View style={styles.headContainer}>
        <Text style={{ fontSize: 24, color: "#FFFFFF", fontWeight: 700 }}>
          India’s Holistic Kids’ Club
        </Text>
        <Text style={{ fontSize: 58, color: "#FFFFFF", fontWeight: 600 }}>
          Play.Chakra
        </Text>
      </View>
      <View style={styles.servingContainer}>
        <Text style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.5)" }}>
          NOW SERVING
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "rgba(255, 241, 177, 1)",
              alignSelf: "center",
              fontWeight: 700,
            }}
          >
            Socorro Gardens, Goa
          </Text>
          <MaterialIcons name="edit" size={15} color="white" />
        </View>
        <View style={styles.dottedLine}></View>
      </View>
    </LinearGradient>
  );
};

export default TopScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  menubar: {
    paddingTop: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "18%",
  },
  servingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "14%",
    gap: 4,
  },
  dottedLine: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderStyle: "dashed",
    width: "48%",
    alignSelf: "center",
    marginVertical: 2,
  },
});
