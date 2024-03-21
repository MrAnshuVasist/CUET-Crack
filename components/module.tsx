import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Module = ({ navigation }) => {
  const modules = [
    { module: 'Module 1', totalQuestions: 250 },
    { module: 'Module 2', totalQuestions: 250 },
    { module: 'Module 3', totalQuestions: 250 },
    { module: 'Module 4', totalQuestions: 250 },
    { module: 'Module 5', totalQuestions: 250 },
    { module: 'Module 6', totalQuestions: 250 },
  ];

  const handleBackButtonPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  // font
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




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text onPress={handleBackButtonPress} style={styles.backButtonText}><Ionicons name="arrow-back-circle" size={30} color="#fea302" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Text onPress={() => navigation.navigate("Profile")} style={styles.backButtonText}><FontAwesome name="user" size={24} color="#fea302" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={styles.subjectName}>SUBJECT_NAME</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
            secureTextEntry={false}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {modules.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate("QuestionsPage")}

              // onPress={() => handleModulePress(item)}
              style={styles.touchableModule}>
              <Text style={styles.moduleTitle}>{item.module}</Text>
            </TouchableOpacity>
            <View style={styles.borderLine} />
            <Text>Total Questions: {item.totalQuestions}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 30,
  },
  backButton: {
    padding: 8,
  },
  profileButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fea302',
  },
  heading: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    
  },
  subjectName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    fontFamily: "AvenirRegular",

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fea302',
    width: 300,
  },
  searchInput: {
    flex: 1,
    paddingVertical:"4%",
    fontSize: 13,
    borderRadius: 10,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop:30,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#fea302',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
    fontFamily: "AvenirRegular",

  },
  touchableModule: {
    width: '100%', // Take the full width of the parent
  },
  borderLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#fea302',
    marginBottom: 8,

  },
});

export default Module;
