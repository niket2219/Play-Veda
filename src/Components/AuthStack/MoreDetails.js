import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useAuth } from "../../AuthContext";

const MoreDetails = () => {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    console.log("Form Details:");
    console.log("Your Name:", name);
    console.log("Child's Name:", childName);
    console.log("Age:", age);
    console.log("Gender:", gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tell us a bit about <Text style={styles.highlight}>you</Text> {"\n"} and
        your <Text style={styles.highlight}>child</Text>
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Child's Name"
        placeholderTextColor="#aaa"
        value={childName}
        onChangeText={setChildName}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={age}
          onValueChange={(itemValue) => setAge(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Age" value="" />
          <Picker.Item label="1 year" value="1" />
          <Picker.Item label="2 years" value="2" />
          <Picker.Item label="3 years" value="3" />
          <Picker.Item label="4 years" value="4" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.logout}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdf8f4",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    color: "#000",
    marginBottom: 40,
    letterSpacing: 0.9,
    lineHeight: 40,
  },
  highlight: {
    color: "rgb(197, 1, 142)",
  },
  input: {
    width: "90%",
    padding: 17,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  picker: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: "90%",
    backgroundColor: "rgb(197, 1, 142)",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logout: {
    color: "rgb(197, 1, 142)",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 40,
    textDecorationLine: "underline",
  },
});

export default MoreDetails;
