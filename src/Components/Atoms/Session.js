import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ms, s } from "react-native-size-matters";
import KidsPlayProgress from "./KidsPlayProgress";

const PlayLilaCard = ({ images = [] }) => {
  const hasImages = images.length > 0;
  const isKidsPlayProgressCard = false;

  return isKidsPlayProgressCard ? (
    <KidsPlayProgress />
  ) : (
    <View
      style={[
        styles.card,
        hasImages ? styles.cardWithImages : styles.cardWithoutImages,
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headings}>
          <Text style={styles.title}>Upcoming Play::Lila Sessions</Text>
          <Text style={styles.subtitle}>in your society</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="rightcircle" size={ms(28)} color="black" />
        </TouchableOpacity>
      </View>

      {hasImages && (
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <FlatList
              data={images}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Image source={item} style={styles.image} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: "90%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 255, 0.05)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "column",
    gap: 12,
    marginTop: 20,
  },
  cardWithImages: {
    minHeight: 180,
  },
  cardWithoutImages: {
    minHeight: 80,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(30),
    justifyContent: "space-between",
  },
  headings: {
    flexDirection: "column",
    gap: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    fontWeight: "400",
  },
  imageContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  imageWrapper: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 4,
  },
});

export default PlayLilaCard;
