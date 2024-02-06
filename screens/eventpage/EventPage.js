import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useMemo } from "react";
import MyCarousel from "../../components/MyCarousel";
import data from "../../data/data.json";
import Ionicons from "@expo/vector-icons/Ionicons";

const EventPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const FilteredData = useMemo(() => {
    return data.events.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#FEEBF1",
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search..."
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Popular Events</Text>
        <MyCarousel data={data.events.filter((item) => item.isPopular)} />
        <FlatList
          data={FilteredData}
          renderItem={({ item }) => (
            <View style={styles.flatList}>
              <Image
                source={{ uri: item.image[0] }}
                style={{
                  width: "40%",
                  height: "100%",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
              <View style={{ padding: 15, width: "60%" }}>
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "white",
                    marginBottom: 15,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "80%",
                    marginBottom: 10,
                  }}
                >
                  <Ionicons name="location" size={24} color="#FAD9B9" />
                  <Text
                    style={{
                      color: "white",
                      marginBottom: 10,
                      fontWeight: 500,
                    }}
                  >
                    {item.location.adress}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "80%",
                  }}
                >
                  <Ionicons name="time" size={24} color="#FAD9B9" />

                  <Text
                    style={{
                      color: "white",
                      marginBottom: 15,
                      fontWeight: 700,
                      fontSize: 14,
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    {item.date} {item.hour}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = {
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "#9087E3",
  },
  input: {
    height: 45,
    borderColor: "#9087E3",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "70%",
    margin: 20,
    marginBottom: 10,
  },
  flatList: {
    width: "90%",
    backgroundColor: "#9087E3",
    margin: 20,
    marginBottom: 0,
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
  },
  scrollView: {
    height: "100%",
    display: "flex",
  },
};
export default EventPage;
