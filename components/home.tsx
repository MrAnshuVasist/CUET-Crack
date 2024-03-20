import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { AntDesign , MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate('About');
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Font loading and registration
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        AvenirRegular: require("../assets/font/AvenirLTStd-Black.otf"),

      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  return (
    <SafeAreaView style={[styles.container, styles.fontAvenirRegular]}>
      <Text style={styles.header}>WELCOME TO</Text>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
        resizeMode="contain"
      />
      <View>
        <View style={styles.logoRowTry}>
          <View>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={35} color="black" />
          </View>
          <View>
            <Text style={styles.iconText}>
              For preparing CUET UG 2024 Exam{" "}
            </Text>
            <Text style={styles.iconSubText}>
              Sociology, Psychology, Pol. Science
            </Text>
          </View>
        </View>
        <View style={styles.logoRowTry}>
          <View>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={35} color="black" />
          </View>
          <View>
            <Text style={styles.iconText}>Flashcard Method of learning</Text>
            <Text style={styles.iconSubText}>
              For easy comprehension and retention
            </Text>
          </View>
        </View>
        <View style={styles.logoRowTry}>
          <View>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={35} color="black" />
          </View>
          <View>
            <Text style={styles.iconText}>Full Syllabus covered</Text>
            <Text style={styles.iconSubText}>
              No need to read books necessarily
            </Text>
          </View>
        </View>
      </View>
      <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent: 'space-around'}}>
        <View style={styles.course}><Text style={styles.center}>Sociology</Text></View>
        <View style={styles.course}><Text style={styles.center}>Psychology</Text></View>
        <View style={styles.course}><Text style={styles.center}>Pol. Science</Text></View>
        <View style={styles.course}><Text style={styles.center}>Others</Text></View>
      </View>
      <TouchableOpacity onPress={handleGetStarted} style={styles.getStarted}>
        <Text style={styles.getStartedText}>Get started  <AntDesign name="rightcircleo" size={24} color="black" /> </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    letterSpacing:5,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  logoRowTry: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FEA302",
    borderRadius: 10,
    paddingHorizontal:10,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 10,
    paddingHorizontal:10,

  },
  iconText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  iconSubText: {
    fontSize: 14,
  },
  course: {
    paddingBottom: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: "#FEA302",
    borderRadius: 8,
    width: 120,
    height: 'auto',
    display: "flex",
  },
  center: {
    textAlign: 'center',
    marginTop: 5,
  },
  getStarted: {
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginTop: 70,
  },
  getStartedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  // Font style
  fontAvenirRegular: {
    fontFamily: "AvenirRegular",
  },
});
