import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CourseAccess({ navigation }) {
  const coursePayment = ({navigation}) => {
    Alert.alert("I Want to pay for course");
  };
  const handleBackButtonPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  return (
    <SafeAreaView style={styles.bgcontainer} >
      <View style={styles.header} >
        <TouchableOpacity style={styles.backButton}>
          <Text onPress={handleBackButtonPress} style={styles.backButtonText}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Text
            onPress={() => navigation.navigate("Profile")}
            style={styles.backButtonText}
          >
            User
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.containerLogo}>
          <Image />
        </View>
        <View style={styles.courseAccess}>
          <Text style={styles.courseAccessText}>Course Access</Text>
        </View>
        <View style={styles.courseContent}>
          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            inventore vitae aliquam explicabo, nobis dolorem iure commodi!
            Provident, ullam odio!
          </Text>
        </View>
        <View style={styles.coursePriceAndJust}>
          <Text style={styles.priceText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            obcaecati quaerat nemo minima ad ex a. Modi eum culpa tempora.
          </Text>
        </View>
        <TouchableOpacity style={styles.payNowBotton} onPress={coursePayment}>
          <Text style={styles.buttonText}>pay now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  bgcontainer:{
    backgroundColor:"white",
    height:"100%",
  },
  mainContainer: {

    backgroundColor:"white",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
  
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
  containerLogo: {},
  courseAccess: {
    textAlign:"center",
  },
  courseAccessText: {
    fontSize: 20,
    fontWeight: "800",
  },
  courseContent: {
    marginVertical: 20,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ff9944",
    paddingVertical: 30,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign:"justify",
  },
  coursePriceAndJust: {
    marginVertical: 20,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 20,
    borderColor: "#ff9944",
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign:"justify",

  },
  payNowBotton: {
    backgroundColor: "#fea302",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});
