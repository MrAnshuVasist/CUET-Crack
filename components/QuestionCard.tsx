import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import PopupComponent from "./Popup";
import { useNavigation } from "@react-navigation/native";

const QuestionCard = () => {
  const navigation=useNavigation();
  const dummyQuestions = Array.from({ length: 500 }, (_, index) => ({
    id: index + 1,
    question: `Question ${index + 1}: What is the capital of Country ${
      index + 1
    }?`,
    answer: `The capital of Country ${index + 1} is Capital ${index + 1}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  const position = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: (_, gestureState) => {
      position.setValue(gestureState.dx);
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 120 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (
        gestureState.dx < -120 &&
        currentIndex < dummyQuestions.length - 1
      ) {
        setCurrentIndex(currentIndex + 1);
      }
      Animated.spring(position, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    },
  });

  const rotateCard = position.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-0deg", "0deg", "0deg"],
    extrapolate: "clamp",
  });

  useEffect(() => {
    // Show the popup if the currentIndex is greater than 10
    if (currentIndex > 9) {
      setShowPopup(true);
    }
  }, [currentIndex]);

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setCurrentIndex(9); // Reset currentIndex to 10 after closing popup
  };
  const handleGetAccess=()=>{
    navigation.navigate("CourseAccess");
    setShowPopup(false);
    setCurrentIndex(0);
  }

  const renderCard = (question, index) => {
    if (index === currentIndex) {
      return (
        <View>
          <Animated.View
            key={question.id}
            style={[
              styles.cardContainer,
              { transform: [{ translateX: position }, { rotate: rotateCard }] },
            ]}
            {...panResponder.panHandlers}
          >
            <Text style={styles.questionNumber}>
              {index + 1}/{dummyQuestions.length}
            </Text>
            <Text style={styles.questionText}>{question.question}</Text>
            <TouchableOpacity onPress={() => setShowAnswer(question.id)}>
              <Text style={styles.showAnswerButton}>Show Answer</Text>
            </TouchableOpacity>
          </Animated.View>

          {showAnswer === question.id && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>{question.answer}</Text>
            </View>
          )}

          
          
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {dummyQuestions.map((question, index) => renderCard(question, index))}
      {/* Popup */}
       {(currentIndex > 9) && (
            <PopupComponent isVisible={showPopup} onClose={handleClosePopup} onAccess={handleGetAccess} />
          )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: Dimensions.get("window").width - 40,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fea302",
    margin: 20,
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
  questionNumber: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 16,
    color: "#fea302",
  },
  showAnswerButton: {
    color: "#fea302", // Button text color
    textDecorationLine: "underline",
    // Underline the button text
  },
  answerContainer: {
    alignItems: "center",
    backgroundColor: "#ffffff", // Background color for question card
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "black",
    width: "96%",
    marginLeft: "4%",
  },
  answerText: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center", // Center the answer text
    color: "black", // Text color for answer
    marginTop: "10%",
    padding: 15, // Add margin top to separate answer from question
  },

});

export default QuestionCard;
