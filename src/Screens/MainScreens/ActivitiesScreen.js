import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { s, ms, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

const PlayChakrHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#1C1C68", "#1C1C68", "#4b1c45"]}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.6, 1]}
        style={styles.container}
      >
        <TouchableOpacity style={{ opacity: 0.9, paddingLeft: 3 }}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <MaskedView maskElement={<Text style={styles.logo}>play::chakr</Text>}>
          <LinearGradient
            colors={["#D2A84D", "#D2A84D", "#FF0188"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.4, 1]}
          >
            <Text style={[styles.logo, { opacity: 0 }]}>play::chakr</Text>
          </LinearGradient>
        </MaskedView>

        <Text style={styles.subtitle}>
          new-age holistic play club{"\n"}for young minds
        </Text>

        <View style={styles.featuresContainer}>
          {[
            "playful activities",
            "holistic development",
            "at your doorstep",
            "safe and convenient",
          ].map((item, index, arr) => (
            <View key={index} style={styles.featureItem}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Text style={styles.icon}>🎉</Text>
                <Text style={styles.featureText}>{item}</Text>
              </View>
              {index < arr.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>learn more</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#4205B2",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    fontSize: ms(50),
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(66, 5, 178, 0.8)",
    textShadowOffset: { width: 0.7, height: 0.5 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
    marginTop: 5,
    opacity: 0.7,
    fontWeight: 200,
    lineHeight: 17,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: vs(20),
    minHeight: 70,
    gap: s(15),
  },
  featureItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: s(19),
    height: "100%",
  },
  icon: {
    fontSize: 18,
  },
  featureText: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    maxWidth: s(70),
    lineHeight: 16,
    color: "#FF2D99",
  },
  separator: {
    width: 1,
    height: "70%",
    backgroundColor: "white",
    opacity: 0.6,
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    textAlign: "center",
    alignSelf: "center",
    paddingVertical: vs(9),
    paddingHorizontal: s(17),
    marginTop: vs(20),
  },
  buttonText: {
    color: "white",
  },
});

export default PlayChakrHeader;
