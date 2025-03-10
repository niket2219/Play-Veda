import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import Icon from "react-native-vector-icons/MaterialIcons";

const App = () => {
  const [country, setCountry] = useState({ cca2: "IN", name: "India" });
  const [email, setEmail] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.bottomContainer}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.title}>{"Let's Get" + " "}</Text>
        <Text style={[styles.title, { color: "rgb(197, 1, 142)" }]}>
          Started
        </Text>
      </View>
      <Text style={styles.subtitle}>Please select your country</Text>

      <TouchableOpacity
        style={styles.pickerContainer}
        onPress={() => setShowPicker(true)}
      >
        <View style={styles.pickerContent}>
          <CountryPicker
            countryCode={country.cca2}
            withFlag
            withFilter
            withAlphaFilter
            withCallingCode
            visible={showPicker}
            onClose={() => setShowPicker(false)}
            onSelect={(selectedCountry) => {
              setCountry(selectedCountry);
              setShowPicker(false);
            }}
          />
          <Text style={styles.countryText}>{country.name}</Text>
        </View>
        <Icon name="keyboard-arrow-down" size={28} color="rgb(191, 8, 204)" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 25,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
    fontWeight: "400",
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 12,
    borderWidth: 1.5,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    marginBottom: 30,
  },
  pickerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
  input: {
    width: "90%",
    padding: 15,
    borderWidth: 1.5,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    marginBottom: 30,
    fontSize: 15,
    fontWeight: "600",
  },
  button: {
    width: "90%",
    backgroundColor: "rgb(197, 1, 142)",
    padding: 13,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
});

export default App;
