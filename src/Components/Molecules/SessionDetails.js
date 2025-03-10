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

const SessionDetails = ({ sessions, currentActive }) => {
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);

  const session = sessions.find((item) => item.id == currentActive);
  console.log(session);

  const sessionData = {
    theme: session.theme,
    benefitsDesc: session.benefitsDesc,
    benefits: session.benefits,
    sessionActivities: session.sessionActivities,
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
                style={[
                  styles.activityCard,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                {item?.icon && (
                  <Image
                    source={{ uri: item.icon }}
                    alt="no image"
                    style={{ width: ms(34), height: ms(34) }}
                    resizeMode="contain"
                  />
                )}
                <Text style={[styles.activityTitle, { color: item.color }]}>
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
