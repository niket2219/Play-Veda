import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { s, ms, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { List, Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MembershipPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("90 Days");
  const [expanded, setExpanded] = useState(false);

  const plans = [
    { name: "30 Days", sessions: 4, price: 750, discountPrice: 700 },
    {
      name: "90 Days",
      sessions: 12,
      price: 750,
      discountPrice: 650,
      popular: true,
    },
    { name: "180 Days", sessions: 24, price: 750, discountPrice: 600 },
  ];

  const planDetails = {
    "30 Days": {
      days: 30,
      sessions: 4,
      price: 750,
      discountPrice: 700,
      features: [
        "Best for short-term play engagement",
        "Holistic play sessions every week",
      ],
    },
    "90 Days": {
      days: 90,
      sessions: 12,
      price: 750,
      discountPrice: 650,
      features: [
        "Best for families promoting regular play",
        "Holistic play session every week",
        "1 pause allowed (max 30 days)",
        "1 special parent-child session",
        "Free access to play.veda AI companion",
        "Best for families promoting regular play",
        "Holistic play session every week",
        "1 pause allowed (max 30 days)",
      ],
    },
    "180 Days": {
      days: 180,
      sessions: 24,
      price: 750,
      discountPrice: 600,
      features: [
        "Best for long-term play development",
        "Weekly holistic sessions",
        "2 pause plays allowed (max 60 days)",
        "2 special parent-child sessions",
        "Free access to play.veda AI companion",
      ],
    },
  };

  const visibleFeatures = expanded
    ? planDetails[selectedPlan].features
    : planDetails[selectedPlan].features.slice(0, 5);

  return (
    <View style={planStyles.container}>
      <View style={planStyles.planSelector}>
        {plans.map((plan) => (
          <TouchableOpacity
            key={plan.name}
            style={[
              planStyles.planTab,
              selectedPlan === plan.name && planStyles.activePlanTab,
            ]}
            onPress={() => {
              setSelectedPlan(plan.name);
              setExpanded(false);
            }}
          >
            <Text
              style={[
                planStyles.planText,
                selectedPlan === plan.name && planStyles.activePlanText,
              ]}
            >
              {plan.name}
            </Text>
            <Text
              style={[
                planStyles.sessionText,
                selectedPlan === plan.name && planStyles.activePlanText,
              ]}
            >
              {plan.sessions} sessions
            </Text>
            {plan.popular && (
              <View style={planStyles.popularTag}>
                <Text style={planStyles.popularText}>POPULAR</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={planStyles.detailsCard}>
        <View style={planStyles.topRow}>
          <Text style={planStyles.planTitle}>
            {planDetails[selectedPlan].days} days{"\n"}
            {planDetails[selectedPlan].sessions} sessions
          </Text>
          <View style={planStyles.launchOffer}>
            <Text style={planStyles.launchText}>🔥 Launch Offer</Text>
            <View style={planStyles.priceRow}>
              <Text style={planStyles.strikePrice}>
                ₹{planDetails[selectedPlan].price}
              </Text>
              <View style={planStyles.newPriceColumn}>
                <Text style={planStyles.discountPrice}>
                  ₹{planDetails[selectedPlan].discountPrice}
                </Text>
                <Text style={planStyles.perSessionText}>per session</Text>
              </View>
            </View>
          </View>
        </View>
        {visibleFeatures.map((feature, index) => (
          <Text key={index} style={planStyles.featureItem}>
            ⭐ {feature}
          </Text>
        ))}
        {planDetails[selectedPlan].features.length > 5 && (
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Text style={planStyles.seeMoreText}>
              {expanded ? "See Less -" : "See More +"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const ButtonPortion = () => {
  const handleChatPress = () => alert("Starting chat support...");
  const handleCallPress = () => alert("Calling support...");

  return (
    <View style={buttonPortionStyles.container}>
      <Text style={buttonPortionStyles.heading}>Need Assistance?</Text>
      <View style={buttonPortionStyles.buttonContainer}>
        <TouchableOpacity
          style={buttonPortionStyles.button}
          onPress={handleChatPress}
        >
          <Ionicons name="chatbubble-outline" size={18} color="black" />
          <Text style={buttonPortionStyles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonPortionStyles.button}
          onPress={handleCallPress}
        >
          <Ionicons name="call-outline" size={18} color="black" />
          <Text style={buttonPortionStyles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (item) => {
    setExpanded(expanded === item ? null : item);
  };

  const faqs = [
    {
      question: "How is PlayChakra different from regular kids’ classes?",
      answer:
        "PlayChakra offers holistic play-based learning sessions that focus on movement, social interaction, and mindfulness.",
    },
    {
      question: "What happens if I miss a session?",
      answer:
        "If you miss a session, you can reschedule it based on availability.",
    },
    {
      question: "Can I change my membership later?",
      answer: "Yes, you can upgrade or modify your membership plan anytime.",
    },
    {
      question: "Can I pause my membership?",
      answer:
        "Yes! Our Pause.Play Flexibility allows you to pause your membership for up to 4 weeks if your child is busy with exams, travel, or other commitments.",
    },
    {
      question: "Can I share my membership with multiple kids?",
      answer:
        "Memberships are currently limited to one child per subscription.",
    },
    {
      question: "Are parents allowed to attend sessions?",
      answer:
        "Yes, parents can join select sessions designed for parent-child interaction.",
    },
  ];

  return (
    <ScrollView contentContainerStyle={faqStyles.container}>
      <List.Section title="Frequently Asked Questions">
        {faqs.map((faq, index) => (
          <View key={index}>
            <List.Accordion
              title={faq.question}
              titleStyle={faqStyles.titleStyle}
              titleNumberOfLines={null}
              expanded={expanded === faq.question}
              onPress={() => toggleExpand(faq.question)}
              theme={{ colors: { background: "transparent" } }}
            >
              <View style={faqStyles.answerContainer}>
                <Text style={faqStyles.answerText}>{faq.answer}</Text>
              </View>
            </List.Accordion>
            <Divider style={faqStyles.divider} />
          </View>
        ))}
      </List.Section>
    </ScrollView>
  );
};

const MembershipScreen = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <LinearGradient
          colors={["#1C1C68", "#1C1C68", "#4b1c45"]}
          start={{ x: 0, y: 0.8 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.6, 1]}
          style={styles.container}
        >
          <TouchableOpacity
            style={{ opacity: 0.9, paddingLeft: 3 }}
            onPress={() => navigator.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <MaskedView
            maskElement={<Text style={styles.logo}>play::chakr</Text>}
          >
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
        <Text
          style={{
            alignSelf: "center",
            fontSize: 15,
            fontWeight: 600,
            paddingTop: 15,
          }}
        >
          Select the Membership Duration
        </Text>
        <MembershipPlans />
        <ButtonPortion />
        <FAQSection />
      </ScrollView>
    </SafeAreaView>
  );
};
const planStyles = StyleSheet.create({
  container: { padding: 20 },
  planSelector: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 2,
  },
  planTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  activePlanTab: {
    backgroundColor: "#ff4081",
  },
  planText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activePlanText: {
    color: "white",
  },
  sessionText: {
    fontSize: 12,
    color: "#666",
  },
  popularTag: {
    position: "absolute",
    top: -8,
    backgroundColor: "gold",
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  popularText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  detailsCard: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff4081",
  },
  launchOffer: {
    alignItems: "flex-end",
  },
  launchText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff5733",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  strikePrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#888",
    marginRight: 5,
  },
  newPriceColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff4081",
  },
  perSessionText: {
    fontSize: 12,
    color: "#666",
    margin: 5,
  },
  featureItem: {
    fontSize: 14,
    marginVertical: 6,
    fontWeight: 500,
    opacity: 0.7,
  },
  seeMoreText: {
    color: "#ff4081",
    fontWeight: "bold",
    marginTop: 10,
  },
});
const buttonPortionStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
    flex: 0.5,
  },
  buttonText: {
    fontSize: 20,
    color: "black",
    marginLeft: 8,
  },
});
const faqStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#333",
    flexWrap: "wrap",
    width: "100%",
  },
  answerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
    color: "#333",
  },
  divider: {
    marginVertical: 5,
    backgroundColor: "#ccc",
    height: 1,
    width: "94%",
    alignSelf: "center",
  },
});
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
    opacity: 0.9,
    fontWeight: 40,
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
    maxWidth: s(65),
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

export default MembershipScreen;
