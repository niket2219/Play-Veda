import React, { useEffect, useState, useMemo } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import Session from "../Atoms/Session";
import Images from "../../Utils/Images/Image";
import Header from "./Header";
import Card from "./Card";
import Card3 from "../Atoms/Card3";
import KidsPlayProgress from "../Atoms/KidsPlayProgress";

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
const data1 = [
  {
    id: 2,
    title: "Play::Veda",
    description:
      "Your personalized AI companion helps with parenting tips, play recommendations, and...",
    isComingSoon: true,
  },
];

const images = [
  Images.Session1,
  Images.Session2,
  Images.Session3,
  Images.Session4,
];

const App = () => {
  const [allCards, setallCards] = useState([]);
  const fetchCards = async () => {
    console.log("plaease wait ..");
    try {
      const [response1, response2] = await Promise.all([
        fetch("https://play-veda-admin-server.onrender.com/api/cards").then(
          (res) => res.json()
        ),
        fetch("https://play-veda-admin-server.onrender.com/api/cards2").then(
          (res) => res.json()
        ),
      ]);
      const response11 = response1.cards;
      const combinedResults = [...response11, ...response2];
      setallCards(combinedResults);
      console.log(combinedResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchCards();
  }, []);

  const mainCards = useMemo(() => {
    return allCards
      .filter((item) => item.display === "mainpage")
      .sort((a, b) => a.order - b.order);
  }, [allCards]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 65 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainScreen}>
          <Header data={allCards} images={images} />
          {mainCards.map((item) => {
            switch (item.type) {
              case "template1":
                return <Card key={item.id} item={item} />;
              case "template2":
                return <Session key={item.id} session={item} />;
              default:
                return null;
            }
          })}
          <Card3 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
