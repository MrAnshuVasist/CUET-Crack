import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  TextInput, // Add this import
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import QuestionCard from './QuestionCard'; // Import QuestionCard component

const QuestionsPage = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const totalModules = 6; // Assuming there are 6 modules
  const [selectedModule, setSelectedModule] = useState(1);
  const height = useRef(new Animated.Value(0)).current;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
    Animated.timing(height, {
      toValue: 270,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    Animated.timing(height, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const handleModuleChange = (module) => {
    setSelectedModule(module);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    if (!isDropdownOpen) {
      openDropdown();
    } else {
      closeDropdown();
    }
  };

  const handleOutsidePress = () => {
    if (isDropdownOpen) {
      toggleDropdown();
    }
  };

  // Function to handle back button press
  const handleBackButtonPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.profileButton}>
            <Text style={styles.backButtonText}>User</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.moduleSelection}
          onPress={toggleDropdown}>
          <Text
            style={
              styles.selectedModuleText
            }>{`Module ${selectedModule}`}</Text>
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.dropdownOptions,
            { height: height },
            isDropdownOpen && styles.dropdownBorder,
          ]}>
          {[...Array(totalModules).keys()].map((module) => (
            <TouchableOpacity
              key={module + 1}
              style={styles.moduleButton}
              onPress={() => handleModuleChange(module + 1)}>
              <Text>{`Module ${module + 1}`}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>

        <QuestionCard />
      </View>
    </TouchableWithoutFeedback>
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
  moduleSelection: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fea302',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: '96%',
    marginLeft: '2%',
  },
  selectedModuleText: {
    fontSize: 16,
    color: 'white',
  },
  dropdownOptions: {
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'white',
    zIndex: 1,
    width: '96%',
    marginLeft: '2%',
    overflow: 'hidden',
  },
  dropdownBorder: {
    borderWidth: 2,
    borderColor: '#fea302',
  },
  moduleButton: {
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fea302',
  },
});

export default QuestionsPage;
