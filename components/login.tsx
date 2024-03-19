import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase authentication functions
import { WebView } from "react-native-webview";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const auth = getAuth(); // Initialize Firebase Auth

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        navigation.navigate("Module"); // Navigate to the Module screen
      })
      .catch((error) => {
        // Handle login errors
        Alert.alert("Error", "Invalid User Credentials");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Image source={require("../assets/logo1.png")} style={styles.logo} />
      </View>
      <View style={styles.section2}>
        <Text style={styles.heading}>LOGIN HERE !</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textcenter}>Forgot Password</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.textcentersign}>
            Don't Have an Account? Signup
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section3}>
        <Text style={{ width: "80%", textAlign: "center", fontSize: 20, marginTop:20, }}>
          Learn about the course and learning methodology{" "}
        </Text>

        <View style={styles.videobox}>
          <WebView
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={false}
            source={{
              uri: "https://www.youtube.com/embed/ONAVmsGW6-M",
            }}
          />
        </View>
        <Text style={styles.textcenter}>
          PRERIT RANA {"\n"} COURSE DIRECTOR
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height:850,
    justifyContent: "center",
    alignItems: "center",
  },
  section1: {
    backgroundColor: "transparent",
    width: "100%",
    height: "10%",
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: "3%",
    marginLeft: 25,
  },
  section2: {
    backgroundColor: "transparent",
    width: "100%",
    height: "40%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    width: "96%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: "transparent",
    marginLeft: "2%",
  },
  button: {
    backgroundColor: "#FEA302",
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 120,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  section3: {
    flex: 1,
    backgroundColor: "transparent",
    width: "96%",
    height: "auto",
    borderColor: "#fea302",
    borderWidth: 3,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",

  },
  textcenter: {
    textAlign: "center",
    margin: 5,
  },
  textcentersign: {
    textAlign: "center",
    margin: 5,
    color: "#fea302",
  },
  videobox: {
    backgroundColor: "transparent",
    width: "90%",
    marginBottom:50,
    marginTop:20,
    aspectRatio: 16 / 9, // Set aspect ratio to 16:9 for the video
  },
});

export default Login;
