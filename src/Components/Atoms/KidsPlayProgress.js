import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ms, s } from "react-native-size-matters";
import { useAuth } from "../../AuthContext";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.39;

const childrenData = [
  {
    name: "Aishwarya",
    progress: "Completed 4 of 10",
    color: "#FBE7F3",
    emoji: "👧",
  },
  {
    name: "Bramha",
    progress: "Session 6 of 10",
    color: "#E0F2FE",
    emoji: "👦",
  },
  { name: "Chris", progress: "Session 3 of 10", color: "#DFF6DD", emoji: "👦" },
  { name: "David", progress: "Session 2 of 10", color: "#FFD6E0", emoji: "👦" },
];

const KidsPlayProgress = () => {
  const { logout } = useAuth();

  const renderItem = ({ item }) => (
    <View
      style={[styles.card, { backgroundColor: item.color, width: CARD_WIDTH }]}
    >
      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.progress}>{item.progress}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kid's Play Progress</Text>
        <TouchableOpacity style={{ marginLeft: s(7) }} onPress={logout}>
          <AntDesign name="right" size={ms(22)} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        {childrenData.length <= 2 ? (
          <View style={styles.rowContainer}>
            {childrenData.map((child, index) => (
              <View
                key={index}
                style={[
                  styles.card,
                  {
                    backgroundColor: child.color,
                    width: childrenData.length === 1 ? "100%" : "48%",
                  },
                ]}
              >
                <Text style={styles.emoji}>{child.emoji}</Text>
                <Text style={styles.name}>{child.name}</Text>
                <Text style={styles.progress}>{child.progress}</Text>
              </View>
            ))}
          </View>
        ) : (
          <FlatList
            horizontal
            data={childrenData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            snapToInterval={CARD_WIDTH + 8}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 2 }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 255, 0.05)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "column",
    gap: 12,
    marginTop: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  card: {
    padding: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    gap: 3,
  },
  emoji: {
    fontSize: 20,
  },
});

export default KidsPlayProgress;
