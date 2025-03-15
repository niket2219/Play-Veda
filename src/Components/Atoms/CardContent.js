import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
import { s, vs, ms } from "react-native-size-matters";

const CardContent = ({ item }) => {
  return (
    <View style={styles.cardContent}>
      {item.isComingSoon && (
        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>
      )}
      {item?.title && <Text style={styles.getStarted}>{item.title}</Text>}
      {item?.description && (
        <Text style={styles.description}>{item.description}</Text>
      )}
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
        {item?.imgUrl && (
          <View style={styles.headerImgContainer}>
            <Image
              source={{ uri: item?.imgUrl }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width,
    padding: 20,
  },
  card: {
    maxHeight: 235,
    borderRadius: 20,
    padding: 4,
    position: "relative",
  },
  whiteBackground: {
    backgroundColor: "#fff",
  },
  cardContent: {
    padding: 14,
    flexDirection: "column",
    gap: 7,
    marginLeft: 4,
  },
  getStarted: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 4,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 6,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    alignSelf: "flex-start",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  headerImgContainer: {
    position: "absolute",
    bottom: -22,
    right: -22,
  },
  image: {
    height: vs(97),
    width: s(134),
  },
  comingSoon: {
    backgroundColor: "#FFBE00",
    padding: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
  },
  comingSoonText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CardContent;
