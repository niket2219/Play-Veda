import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const MembershipCard = () => {
  const navigator = useNavigation();
  const [visible, setVisible] = useState(true);
  const slotsLeft = 2;

  if (!visible) return null;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.cancelButton}
        >
          <Ionicons name="close" size={20} color="white" />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ gap: 2, marginLeft: 3 }}>
            <Text style={styles.title}>Play.Chakra</Text>
            <Text style={styles.subtitle}>Kids Club Membership</Text>
            {slotsLeft > 0 && (
              <Text style={styles.alert}>
                🔥 <Text style={styles.boldText}>Hurry!</Text> only {slotsLeft}{" "}
                slots left
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigator.navigate("MemberShip")}
          >
            <Text style={styles.buttonText}>Get Now </Text>
            <AntDesign name="right" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#0000FF",
    flexDirection: "column",
    gap: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cancelButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#00008B",
    borderRadius: "100%",
    padding: 1,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    marginVertical: 5,
  },
  alert: {
    color: "#FFD700",
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#00008B",
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default MembershipCard;
