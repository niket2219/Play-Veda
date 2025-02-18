import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { s, vs, ms } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import CardContent from "../Atoms/CardContent";

const { width } = Dimensions.get("window");

const Card = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      {item.imgUrl ? (
        <LinearGradient
          colors={["#C2F0FB", "#FFFBE9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <CardContent item={item} />
        </LinearGradient>
      ) : (
        <View style={[styles.card, styles.whiteBackground]}>
          <CardContent item={item} />
        </View>
      )}
    </View>
  );
};

// const CardContent = ({ item }) => (
//   <View style={styles.cardContent}>
//     {item.isComingSoon && (
//       <View style={styles.comingSoon}>
//         <Text style={styles.comingSoonText}>Coming Soon</Text>
//       </View>
//     )}
//     <Text style={styles.getStarted}>{item.title}</Text>
//     <Text style={styles.description}>{item.description}</Text>
//     <View style={styles.cardFooter}>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Learn More</Text>
//       </TouchableOpacity>
//       {item?.imgUrl && (
//         <View style={styles.headerImgContainer}>
//           <Image source={item.imgUrl} style={styles.image} />
//         </View>
//       )}
//     </View>
//   </View>
// );

const styles = StyleSheet.create({
  cardContainer: {
    width,
    padding: 20,
  },
  card: {
    maxHeight: 230,
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
    gap: 6,
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
    alignItems: "center",
    marginTop: 4,
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

export default Card;
