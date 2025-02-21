import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Images from "../../Utils/Images/Image";
import { s, vs, ms } from "react-native-size-matters";

const MAX_VISIBLE_SESSION_ACTIVITIES = 4;
const MAX_VISIBLE_BENEFITS = 3;

const SessionDetails = () => {
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);

  const sessionData = {
    theme: "Let's Get Moving & Make New Friends",
    benefitsDesc:
      "This fun-filled session is designed to help kids feel comfortable, make new friends, and build confidence through interactive group play.",
    benefits: [
      "Social bonding & communication skills",
      "Confidence in group settings",
      "A sense of teamwork & self-expression",
      "Improved physical coordination",
      "Enhanced creativity and expression",
    ],
    sessionActivities: [
      {
        id: "5",
        name: "shoonya.play",
        description: "Calm and Reflect",
        color: "#DFF4FE",
        titleColor: "#30ADE7",
        icon: Images.activity3,
      },
      {
        id: "6",
        name: "rasa.play",
        description: "My Play Passport",
        color: "#FFE7EF",
        titleColor: "#ED5286",
        icon: Images.activity4,
      },
      {
        id: "1",
        name: "urja.play",
        description: "Find Your Buddy",
        color: "#FFEFE2",
        titleColor: "#FE8A2C",
        icon: Images.activity1,
      },
      {
        id: "2",
        name: "moolya.play",
        description: "The Magic of Teamwork",
        color: "#EAE8FF",
        titleColor: "#8077E7",
        icon: Images.activity2,
      },
      {
        id: "3",
        name: "shoonya.play",
        description: "Calm and Reflect",
        color: "#DFF4FE",
        titleColor: "#30ADE7",
        icon: Images.activity3,
      },
      {
        id: "4",
        name: "rasa.play",
        description: "My Play Passport",
        color: "#FFE7EF",
        titleColor: "#ED5286",
        icon: Images.activity4,
      },
    ],
  };

  const visibleBenefits = showAllBenefits
    ? sessionData.benefits
    : sessionData.benefits.slice(0, MAX_VISIBLE_BENEFITS);

  const visibleActivities = showAllActivities
    ? sessionData.sessionActivities
    : sessionData.sessionActivities.slice(0, MAX_VISIBLE_SESSION_ACTIVITIES);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ display: "flex", gap: 10 }}>
        <View>
          <Text style={styles.theme}>Session Theme</Text>
          <Text style={styles.themeDesc}>{sessionData.theme}</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Session Benefits</Text>
          <Text style={styles.description}>{sessionData.benefitsDesc}</Text>

          <FlatList
            data={visibleBenefits}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.benefitsContainer}>
                <View style={styles.divider}></View>
                <Text style={styles.benefit}>
                  🌟{"\u00A0"} {item}
                </Text>
              </View>
            )}
            nestedScrollEnabled
          />
          <View style={[styles.divider, { marginTop: 10 }]}></View>
          {sessionData.benefits.length > MAX_VISIBLE_BENEFITS && (
            <TouchableOpacity
              onPress={() => setShowAllBenefits(!showAllBenefits)}
            >
              <Text style={styles.seeAll}>
                {showAllBenefits ? "See Less ▲" : "See More ▼"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ marginTop: 6, flex: 1 }}>
          <Text style={[styles.sectionTitle, { marginLeft: s(5) }]}>
            Session Activities
          </Text>
          <FlatList
            data={visibleActivities}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[styles.activityCard, { backgroundColor: item.color }]}
              >
                {item?.icon && (
                  <Image
                    source={item.icon}
                    style={{ width: ms(34), height: ms(34) }}
                    resizeMode="contain"
                  />
                )}
                <Text
                  style={[styles.activityTitle, { color: item.titleColor }]}
                >
                  {item.name}
                </Text>
                <Text style={styles.activityDesc}>{item.description}</Text>
              </View>
            )}
            nestedScrollEnabled
          />
          {sessionData.sessionActivities.length >
            MAX_VISIBLE_SESSION_ACTIVITIES && (
            <TouchableOpacity
              onPress={() => setShowAllActivities(!showAllActivities)}
            >
              <Text style={[styles.seeAll, { marginLeft: s(6) }]}>
                {showAllActivities ? "See Less ▲" : "See More ▼"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  theme: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 4,
  },
  themeDesc: {
    fontSize: 14,
    fontWeight: 400,
    opacity: 0.7,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 14,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    opacity: 0.6,
    marginBottom: 10,
    lineHeight: 24,
  },
  benefit: {
    fontSize: 15,
    marginBottom: 4,
    fontWeight: 600,
    opacity: 0.8,
  },
  activityCard: {
    flex: 1,
    margin: 8,
    padding: 12,
    borderRadius: 10,
    paddingBottom: vs(22),
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 600,
    opacity: 0.9,
    marginVertical: 4,
  },
  activityDesc: {
    fontSize: 12,
    color: "#555",
  },
  seeAll: {
    fontSize: 15,
    color: "#007BFF",
    marginTop: 10,
    fontWeight: 300,
  },
  divider: { borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 5 },
  benefitsContainer: {
    display: "flex",
    gap: 5,
    marginTop: 10,
  },
});

export default SessionDetails;
