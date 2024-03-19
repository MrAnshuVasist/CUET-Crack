import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const PopupComponent = ({ isVisible, onClose ,onAccess }) => {

  const navigation=useNavigation();  


  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
      presentationStyle="fullScreen"
      //   hardwareAccelerated={true}
    >
      <View style={styles.backgroundcontainer}>
        <View style={styles.containerMain}>
          <View style={styles.crossSign}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courseAccessTextBox}>
            <Text style={styles.courseText}>
              Your Free Trail Of 10 Questions is Over For This Module To Get a
              Full Access Of The Course Press Here !
            </Text>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.submitButton} >
              <Text style={styles.buttonText} onPress={onAccess}>Get Access</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backgroundcontainer: {
    height: "100%",
    backgroundColor: "gray",
    opacity: 0.9,
  },
  containerMain: {
    backgroundColor: "#fea302",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    width: "95%",
    marginLeft: "2.5%",
    marginTop: "60%",
    zIndex: 10,
    opacity:1,
  },

  crossSign: {
    flexDirection: "row-reverse",
  },

  closeButton: {
    padding: 5,
  },

  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  cross: {
    height: 1,
    width: 1,
  },

  courseAccessTextBox: {
    marginHorizontal: 10,
  },
  courseText: {
    padding: 10,
    fontSize: 15,
    fontWeight: "400",
    textAlign: "justify",
    color: "white",
  },
  buttonBox: {
    marginHorizontal: 10,
  },
  submitButton: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fea302",
    fontSize: 12,
    textAlign: "center",
  },
});

export default PopupComponent;
