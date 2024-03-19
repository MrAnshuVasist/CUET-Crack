import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/config";

const TryFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection( firestore, "sociology"));
        const dataArray = [];
        querySnapshot.forEach((doc) => {
          // Push each document's data to the array
          dataArray.push({
            id: doc.id,
            question1: doc.data().question1.text,
            answer1: doc.data().question1.answer,
          });
        });
        // Set the formatted data to state
        setData(dataArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup tasks, if any
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sociology Data</Text>
      {data.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text>ID: {item.id}</Text>
          <Text>question: {item.question1}</Text>
          <Text>answer: {item.answer1}</Text>
          {/* <Text>Data: {JSON.stringify(item)}</Text> */}
        </View>
      ))}
    </View>
  );
};

export default TryFetch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  item: {
    marginBottom: 10
  }
});
