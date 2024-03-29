import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import authentication functions from Firebase
 // Import the firebaseApp as a named export
import { firebaseApp } from '../firebase/config';
// Your component code...
import * as Font from "expo-font";
import { Link } from "@react-navigation/native";


export default function Signup({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const handleSignup = () => {
    const auth = getAuth(firebaseApp); // Initialize Firebase auth

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        // You can do further actions here like navigating to another screen or showing a success message
        Alert.alert('Success', 'Signup Successful');
      })
      .catch((error) => {
        // An error occurred during signup
        // You can handle errors here, for example, display an error message to the user
        Alert.alert('Error', error.message);
      });
  };


  //font 

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
    <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Image
          source={require("../assets/logo1.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.section2}>
        <Text style={styles.heading}>SIGNUP FOR FREE</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
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
      </View>
      <View style={styles.buttonsection}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Module")} style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logintext}>Have an Account? Login</Text>
      </TouchableOpacity>
      <View style={styles.section3}>
        <Text style={{textAlign:"center", fontSize: 18,    fontFamily: "AvenirRegular", marginTop:8, color: 'white', }}>COURSE DIRECTOR</Text>
        <Image
        src="../assets/splash.png"
        style={styles.logo}
        />
        <Text style={{textAlign:"center", fontSize: 16, fontFamily: "AvenirRegular", marginTop:8, letterSpacing:2 }} >PRERIT RANA</Text>
        <Text style={{textAlign:"center",}} >CEO of Agrasar</Text>
        <Text style={{textAlign:"center",fontSize: 17,marginTop:8,}}  >"Has been mentoring and teaching students across india for the past 15 years."</Text>
        <Text style={{textAlign:"center", color:"white",marginTop:10,fontSize: 17,}} >https://www.linkedin.com/in/preritrana/</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:30,
    fontFamily: "AvenirRegular",
  },
  section1: {
    height: 50,
    width: "100%",
    backgroundColor: "transparent",

  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 25,
  },
  section2: {
    flex: 1,
    width: "100%",
    height: "50%",
    backgroundColor: "transparent",
    padding: 20,
    alignItems: 'center',
    fontFamily: "AvenirRegular",

  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "AvenirRegular",

  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: "transparent"
  },
  buttonsection: {
    height: "6%",
    flexDirection: 'row',
    marginBottom: "1%"
  },
  button: {
    flex: 1,
    backgroundColor: '#FEA302',
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: "AvenirRegular",

  },
  logintext: {
    marginBottom: "10%",
    color: "#fea302",
    marginTop: "5%",
    fontFamily: "AvenirRegular",
    fontSize: 14,


    
  },
  section3: {
    height: "30%",
    width: "95%",
    backgroundColor: "#FEA302",
    borderRadius: 20,
    margin: "2%",
    fontFamily: "AvenirRegular",
  }
});
