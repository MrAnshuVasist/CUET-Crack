import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase authentication functions
import * as Font from "expo-font";

export default function About({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        AvenirRegular: require("../assets/font/AvenirLTStd-Black.otf"),

      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  useEffect(() => {
    const auth = getAuth(); // Get Firebase Auth instance

    // Check the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });

    // Cleanup function to unsubscribe from the listener
    return unsubscribe;
  }, []);

  const handleGetStarted = () => {
    if (loggedIn) {
      navigation.navigate('Module');
    } else {
      navigation.navigate('Signup');
    }
  };



  return (
    <SafeAreaView style={{ flex: 1, marginTop: "3%" }}>
      {/* Section one start from here */}
      <View style={styles.sectionOne}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo1.png")} style={styles.logo} />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleGetStarted}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Section two start from here */}
      <View style={styles.sectionTwo}>
        <Text style={styles.heading}>CUET CRACK Method</Text>
        <Text style={styles.bullet}>• Rereading textbooks multiple times is not effective for learning</Text>
        <Text style={styles.bullet}>• Our flashcard method focuses on effortful retrieval by answering questions without prompts</Text>
        <Text style={styles.bullet}>• This is not a question bank. Questions are designed for logical understanding and cover full syllabus</Text>
        <Text style={styles.bullet}>• Revising questions 3-5 times before exams helps reinforce learning</Text>
        <Text style={styles.goodLuck}>Good luck!</Text>
      </View>

      {/* Section three start from here */}
      <View style={styles.sectionThree}>
        <TouchableOpacity style={styles.trialButton} onPress={handleGetStarted}>
          <Text style={styles.trialButtonText}>Free Trial Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    height: "10%",
    marginTop:30,

  },
  logoContainer: {
    width: "30%",
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: "10%",
    marginLeft: 20,
  },
  loginButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FEA302",
    padding: 15,
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: "5%",
    borderRadius: 5,
    marginRight: 20,
    fontFamily: "AvenirRegular",
  },
  loginButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "AvenirBold",
  },
  sectionTwo: {
    padding: 20,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    fontFamily: "AvenirRegular",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 40,
    textAlign: "center",
  },
  bullet: {
    fontSize: 16,
    marginBottom: 30,
  },
  goodLuck: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  sectionThree: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  trialButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 5,
  },
  trialButtonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "AvenirBold",
  },
});
