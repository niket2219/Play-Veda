import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

const membershipData = [
  { id: 1, status: "active", text: "Active till 30-Mar-2025" },
  { id: 2, status: "expiring", text: "Expiring in 2 Days" },
  { id: 3, status: "expired", text: "Expired on 30-Mar-2025" },
  { id: 4, status: "paused", text: "Paused till 15-Mar-2025" },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "active":
      return { bgColor: "#121212", textColor: "#008000", icon: "🛡️" };
    case "expiring":
      return { bgColor: "#FFE5C2", textColor: "#FFA500", icon: "⏳" };
    case "expired":
      return { bgColor: "#FFD2D2", textColor: "#FF0000", icon: "🚫" };
    case "paused":
      return {
        bgColor: "rgba(18, 18, 18, 0.1)",
        textColor: "#808080",
        icon: "⏸️",
      };
    default:
      return {
        bgColor: "rgba(18, 18, 18, 0.1)",
        textColor: "#000000",
        icon: "❔",
      };
  }
};

const MembershipCard = ({ membership }) => {
  const { bgColor, textColor, icon } = getStatusStyle(membership.status);

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: "white" }]}>
      <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Play.Chakra Membership</Text>
        <Text style={[styles.statusText, { color: textColor }]}>
          {membership.text}
        </Text>
      </View>
      <View style={{ marginRight: 13 }}>
        <AntDesign name="right" size={22} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default function Card3() {
  return (
    <View style={styles.container}>
      {membershipData.map((item) => (
        <MembershipCard key={item.id} membership={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    width: s(316),
    height: vs(88),
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 1,
    gap: 18,
  },
  iconContainer: {
    width: 47,
    height: "96%",
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  icon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    gap: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
  statusText: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 400,
  },
});
