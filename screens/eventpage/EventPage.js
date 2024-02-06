import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import MyCarousel from "../../components/MyCarousel";
import data from "../../data/data.json";

const EventPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <TextInput
        style={styles.input}
        //onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search..."
      />

      <Text style={styles.header}>Popular Events</Text>
      <MyCarousel data={data.events.filter((item) => item.isPopular)} />
    </SafeAreaView>
  );
};
const styles = {
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    width: "90%",
    margin: 20,
  },
};
export default EventPage;
