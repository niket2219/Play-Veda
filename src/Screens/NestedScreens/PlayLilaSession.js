import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { s, vs, ms } from "react-native-size-matters";
import Images from "../../Utils/Images/Image";
import SessionDetails from "../../Components/Molecules/SessionDetails";

const sessions = [
  { id: "1", week: "week 1", date: "3", month: "Mar" },
  { id: "2", week: "week 1", date: "10", month: "Mar" },
  { id: "3", week: "week 1", date: "17", month: "Mar" },
  { id: "4", week: "week 1", date: "24", month: "Mar" },
  { id: "5", week: "week 1", date: "31", month: "Mar" },
];

const INFO_DATA = [
  { title: "AGE GROUP", value: "5-10", subText: "years" },
  { title: "BATCH SIZE", value: "10-12", subText: "kids" },
  { title: "DURATION", value: "90", subText: "mins" },
];

const images = [Images.LilaSessionImage];

const SessionHeader = () => {
  const navigator = useNavigation();
  return (
    <LinearGradient
      colors={["#464684", "#72379B", "#7E4176"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.9, 1]}
      style={sessionHeaderStyles.container}
    >
      <TouchableOpacity
        style={{ opacity: 0.9, paddingLeft: 3 }}
        onPress={() => navigator.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <View style={sessionHeaderStyles.textContainer}>
        <View style={sessionHeaderStyles.titleContainer}>
          <Text style={sessionHeaderStyles.title}>Play.Lila</Text>
          <Text style={sessionHeaderStyles.subtitle}>Sessions</Text>
        </View>
        <View style={{ marginTop: 2, opacity: 0.7 }}>
          <Text style={sessionHeaderStyles.location}>
            DLF Camellias, Gurgaon
          </Text>
        </View>
      </View>
      <View>
        <SessionCard />
      </View>
    </LinearGradient>
  );
};

const SessionCard = () => {
  const [selectedId, setSelectedId] = useState("1");
  return (
    <View style={sessionCardStyles.container}>
      <FlatList
        horizontal
        data={sessions}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const isActive = item.id === selectedId;
          return (
            <View>
              <TouchableOpacity
                style={[
                  sessionCardStyles.sessionBox,
                  isActive && sessionCardStyles.activeSession,
                ]}
                onPress={() => setSelectedId(item.id)}
              >
                <Text
                  style={[
                    sessionCardStyles.weekText,
                    isActive && sessionCardStyles.activeWeekText,
                    { marginTop: 6 },
                  ]}
                >
                  {item.week}
                </Text>
                <View style={sessionCardStyles.dateMonth}>
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    {item.date}
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: 700 }}>
                    {item.month}
                  </Text>
                </View>
              </TouchableOpacity>
              {isActive && <View style={sessionCardStyles.activeDot} />}
            </View>
          );
        }}
      />
    </View>
  );
};

const ScheduleCard = () => {
  return (
    <View style={scheduleStyles.card}>
      <Text style={scheduleStyles.date}>Monday, 3rd Mar</Text>
      <Text style={scheduleStyles.time}>
        5:30 - 7:00 PM :: Amphitheatre, Club House
      </Text>
      <View style={scheduleStyles.separator} />
      <View style={scheduleStyles.infoContainer}>
        {INFO_DATA.map((item, index) => (
          <View key={index} style={scheduleStyles.infoBlock}>
            <Text style={scheduleStyles.infoTitle}>{item.title}</Text>
            <View style={scheduleStyles.valueContainer}>
              <Text style={scheduleStyles.infoValue}>{item.value}</Text>
              <Text style={scheduleStyles.infoSubText}>{item.subText}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={scheduleStyles.separator} />
    </View>
  );
};

const WelcomePortion = () => {
  return (
    <View
      style={{
        display: "flex",
      }}
    >
      <Text
        style={{
          fontSize: ms(28),
          fontWeight: "600",
          marginHorizontal: s(20),
          flexWrap: "wrap",
          marginVertical: vs(5),
        }}
      >
        Welcome to the World of Play!
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <FlatList
          horizontal
          data={images}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ width: s(330), alignItems: "center" }}>
                <Image
                  source={item}
                  style={{ height: vs(170), width: s(310) }}
                  resizeMode="contain"
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const PlayLilaSession = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <SessionHeader />
        <ScheduleCard />
        <WelcomePortion />
        <SessionDetails />
        <View
          style={{
            display: "flex",
            paddingHorizontal: s(22),
            paddingVertical: vs(10),
            gap: 10,
          }}
        >
          <Text style={{ fontSize: ms(20), fontWeight: 700, marginBottom: 10 }}>
            Play Badge
          </Text>
          <Text style={{ color: "#FF126D", fontSize: ms(16) }}>
            Explorer of Play 🏅
          </Text>
          <Text
            style={{
              fontSize: ms(14),
              lineHeight: 24,
              opacity: 0.6,
              flexShrink: 1,
            }}
          >
            All kids receive this sticker badge for enthusiastically engaging in
            games, making new friends, and working as a team!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const sessionHeaderStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  textContainer: {
    marginTop: 10,
    paddingLeft: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 250,
    color: "#FFFFFF",
  },
  location: {
    fontSize: 14,
    fontWeight: 500,
    color: "#FFFFFF",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

const sessionCardStyles = StyleSheet.create({
  container: {
    marginTop: vs(26),
    padding: 0,
  },
  sessionBox: {
    backgroundColor: "#000",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: "#fff",
    minWidth: 68,
  },
  activeSession: {
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
  },
  weekText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 300,
  },
  activeWeekText: {
    color: "#000",
    fontSize: 12,
    fontWeight: 600,
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 3,
    marginTop: 10,
    alignSelf: "center",
  },
  dateMonth: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: vs(8),
    paddingBottom: vs(10),
    marginTop: vs(6),
    marginBottom: -vs(3),
  },
});

const scheduleStyles = StyleSheet.create({
  card: {
    padding: ms(15),
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: vs(9),
    marginBottom: vs(5),
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    color: "gray",
    marginVertical: 7,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: vs(8),
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: s(10),
    marginVertical: vs(14),
  },
  infoBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 10,
    color: "gray",
    textTransform: "uppercase",
    transform: [{ rotate: "-90deg" }],
    marginRight: 1,
  },
  valueContainer: {
    alignItems: "center",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoSubText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});

export default PlayLilaSession;
