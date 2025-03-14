import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { s, vs, ms } from "react-native-size-matters";
const { width } = Dimensions.get("window");
import Feather from "@expo/vector-icons/Feather";
import Card from "./Card";

const Header = ({ data, images }) => {
  const [scrollX, setScrollX] = useState(0);

  return (
    <View style={[styles.headerContainer, { height: "auto" }]}>
      <View style={styles.profileContainer}>
        <View style={styles.fixedHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>👤</Text>
          </View>
          <View>
            <Text style={styles.welcomeText}>
              Welcome, <Text style={styles.bold}>Sanam</Text>
            </Text>
            <Text style={styles.location}>DLF Camellias, Gurgaon</Text>
          </View>
        </View>
        <View>
          <Feather name="menu" size={24} color="white" />
        </View>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <Card item={item} key={item.id} />
        ))}
      </ScrollView>
      <View style={styles.progressBar}>
        {data.map((_, index) => {
          const isActive = Math.round(scrollX / width) === index;
          return (
            <View
              key={index}
              style={[
                styles.progressSegment,
                {
                  width: isActive
                    ? width * 0.3
                    : (width * 0.4) / (data.length - 1),
                  opacity: isActive ? 1 : 0.5,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: "rgba(18, 18, 18, 1)",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: "relative",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#111",
    marginTop: 15,
  },
  fixedHeader: {
    display: "flex",
    flexDirection: "row",
  },
  avatarContainer: {
    width: s(40),
    height: vs(40),
    borderRadius: 20,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: s(10),
  },
  avatar: {
    color: "#fff",
    fontSize: ms(20),
  },
  welcomeText: {
    color: "#fff",
    fontSize: ms(18),
  },
  bold: {
    fontWeight: "bold",
  },
  location: {
    color: "#aaa",
    fontSize: ms(14),
  },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 7,
    width: "100%",
    alignSelf: "center",
  },
  progressSegment: {
    height: 3,
    backgroundColor: "#ffffff",
    marginHorizontal: 2,
    borderRadius: 5,
  },
});

export default Header;
