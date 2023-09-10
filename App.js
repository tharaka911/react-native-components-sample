import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Button,
  Alert,
  Image,
} from "react-native";

import React, { useState } from "react";

import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";

const data = [
  { name: "Lakshan", mobile: "0710507342" },
 
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Kanit-Bold": require("./assets/fonts/Kanit-Bold.ttf"),
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.text1}>
        Open up App.js to start working on your app!
      </Text>

      <FlatList data={data} renderItem={UserUI} />

      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />



    </SafeAreaView>
  );
}

function UserUI({ item }) {
  return (
    <View style={styles.card}>
      <Image
        source={require("./assets/1.jpg")}
        style={{ width: 30, height: 30 }}
      />
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 30, height: 30 }}
      />
      <Text style={styles.text1}>{item.name}</Text>
      <Text style={styles.text2}>{item.mobile}</Text>

      <Button
        title="Click Me"
        onPress={() => {
          Alert.alert("Message", item.name);
        }}
      />
    </View>
  );

  function clickMe(x) {
    Alert.alert("Message", x);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f3640",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff", // Set your card background color here
    borderRadius: 10, // Adjust the border radius for the card
    padding: 16, // Adjust the padding for the card content
    margin: 8, // Adjust the margin between cards
    shadowColor: "#000",
    width: 300,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text1: {
    fontFamily: "Kanit-Bold",
    fontSize: 18,
    marginBottom: 8, // Adjust the spacing between text elements
  },
  text2: {
    fontFamily: "Kanit-Bold",
    fontSize: 16,
    color: "blue", // Adjust the text color
  },
});
