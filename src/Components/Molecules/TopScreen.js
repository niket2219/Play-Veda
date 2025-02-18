import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import Session from "../Atoms/Session";
import Images from "../../Utils/Images/Image";
import Header from "./Header";

const data = [
  {
    id: 1,
    title: "Get Started",
    description:
      "learn about play::lila, our play-centered holistic enrichment program",
    isComingSoon: false,
    imgUrl: Images.headerImg,
  },
  {
    id: 2,
    title: "Play::Veda",
    description:
      "Your personalized AI companion helps with parenting tips, play recommendations, and...",
    isComingSoon: true,
  },
  {
    id: 3,
    title: "Join",
    description:
      "Become a part of our vibrant community today and Enjoy Unlimited Services ",
  },
  {
    id: 4,
    title: "Get started Your personalized AI companion helps...",
  },
  {
    id: 5,
    title: "Enjoy",
    description: "Experience our top-notch services and offerings",
  },
];

const images = [
  Images.Session1,
  Images.Session2,
  Images.Session3,
  Images.Session4,
];

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainScreen}>
          <Header data={data} images={images} />
          <Session images={images} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    display: "flex",
    alignItems: "center",
  },
});

export default App;
