import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { s, vs, ms } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const screens = [
    {
      title: "Learn by doing\nand playing",
      description:
        "Activities & games to help your child learn essential skills and values",
    },
    {
      title: "Explore & Grow",
      description:
        "Discover fun and engaging activities tailored for your child's learning",
    },
  ];

  const handleScroll = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(newIndex);
  };

  const scrollToNext = () => {
    scrollRef.current.scrollTo({ x: width, animated: true });
    setIndex(1);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* {screens.map((screen, i) => (
          <View key={i} style={[styles.slide, { width }]}>
            <View style={styles.textContainer}>
              <View style={styles.textContainer1}>
                <View>
                  <Text style={styles.text1}>{"Courses" + "  "}</Text>
                </View>
                <View>
                  <Text style={styles.text2}>to learn</Text>
                </View>
              </View>
              <View>
                <Text style={styles.text2}>life skills</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{screen.description}</Text>
            </View>
          </View>
        ))} */}
        <Screen1 />
        <Screen2 />
      </ScrollView>

      <View style={styles.indicatorContainer}>
        {screens.map((_, i) => (
          <View
            key={i}
            style={[
              styles.indicator,
              index === i ? styles.activeIndicator : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
      {index === 0 ? (
        <TouchableOpacity style={styles.button} onPress={scrollToNext}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OnboardingScreen;

const Screen1 = () => {
  return (
    <View style={[styles.slide, { width }]}>
      <View style={styles.textContainer}>
        <View style={styles.textContainer1}>
          <View>
            <Text style={[styles.text1, { color: "#6A1B9A" }]}>
              {"Courses" + "  "}
            </Text>
          </View>
          <View>
            <Text style={styles.text2}>to learn</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text2}>life skills</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Recorded courses to help your child learn at their own pace.
        </Text>
      </View>
    </View>
  );
};
const Screen2 = () => {
  return (
    <View style={[styles.slide, { width }]}>
      <View style={styles.textContainer}>
        <View style={styles.textContainer1}>
          <View>
            <Text style={styles.text1}>{"Learn by" + " "}</Text>
          </View>
          <View>
            <Text style={[styles.text2, { color: "#6A1B9A" }]}>doing</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text2, { color: "#6A1B9A" }]}>and playing</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Activities & games to help your child learn essential skills and
          values
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  slide: {
    alignItems: "center",
    padding: 20,
    justifyContent: "flex-end",
  },
  text1: {
    fontSize: ms(30),
    fontWeight: "700",
    opacity: 0.7,
    textAlign: "center",
  },
  text2: {
    fontSize: ms(30),
    fontWeight: "700",
    opacity: 0.8,
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  textContainer1: {
    display: "flex",
    flexDirection: "row",
  },
  descriptionContainer: {
    width: "85%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: vs(15),
  },
  description: {
    opacity: 0.5,
    textAlign: "center",
    lineHeight: vs(18),
    fontWeight: "500",
  },

  indicatorContainer: {
    flexDirection: "row",
    marginBottom: 45,
    marginTop: 30,
  },
  indicator: {
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
    opacity: 0.9,
  },
  activeIndicator: {
    backgroundColor: "#6A1B9A",
    width: 15,
    height: 6,
    borderRadius: 5,
    opacity: 0.9,
  },
  inactiveIndicator: {
    backgroundColor: "#D3D3D3",
    width: 7,
    opacity: 0.9,
  },

  button: {
    backgroundColor: "#6A1B9A",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: width * 0.8,
    marginBottom: vs(50),
    opacity: 0.8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
