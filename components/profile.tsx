import React, { useState , useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut ,onAuthStateChanged   } from 'firebase/auth';  // Import useNavigation hook
import { FontAwesome,Ionicons } from '@expo/vector-icons';




const Profile = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    // Check if the user is authenticated
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.email || user.displayName);
        setAuthenticated(true);
      } else {
        setUsername('');
        setAuthenticated(false);
      }
    });
  }, []);
  const handleLoginOrLogout = () => {
    if (authenticated) {
      handleLogout();
    } else {
      handleLogin();
    }
  };

  const handleLogin = () => {
    navigation.navigate('Signup'); // Navigate to the Signup page
  };

  const handleLogout = () => {
    const auth = getAuth(); // Get Firebase Auth instance

    signOut(auth)
      .then(() => {
        // Logout successful
        navigation.navigate('Home'); // Navigate to the home page
        Alert.alert('Logout', 'You have been logged out successfully.');
      })
      .catch((error) => {
        // Handle logout errors
        Alert.alert('Error', 'An error occurred while logging out.');
      });
  };
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000); // Close the popup after 1 second
  };
  const handleBackButtonPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.backButton}>
          <Text style={styles.backButtonText}><Ionicons name="arrow-back-circle" size={30} color="white" /></Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.userName}>Course</Text>
        </View>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={togglePopup}>
          <Text style={styles.optionText}>My Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate("About")} style={styles.option}>
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLoginOrLogout}>
          <Text style={styles.optionText}>{authenticated ? 'Logout' : 'Login'}</Text>
        </TouchableOpacity>
        <Image
          style={styles.bgimg}
          source={require('../assets/logo.png')}
        />
      </View>
      {/* Popup */}
      <Modal visible={showPopup} transparent animationType="fade">
        <View style={styles.popup}>
          <Text style={styles.popupText}>This functionality will be available in future versions</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fea302',
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
  },
  userInfo: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  options: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  bgimg: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    marginTop: '30%',
    height: '40%',
    width: '40%',
    marginLeft: '30%',
  },
  popup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Profile;