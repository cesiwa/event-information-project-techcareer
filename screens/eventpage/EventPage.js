import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Button,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useMemo } from "react";
import MyCarousel from "../../components/MyCarousel";
import data from "../../data/data.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import EventCard from "../../components/EventCard";
import { useNavigation } from "@react-navigation/native";

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

  // date işlemleri
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [open2, setOpen2] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
  };
  const navigation = useNavigation();

  const sendData = ({ item }) => {
    navigation.navigate({
      name: "EventDetailPage",
      params: { item: item },
    });
  };

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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#9087E3",
              alignSelf: "center",
              marginLeft: 20,
            }}
          >
            Start Date:
          </Text>

          {/* <Text>
            {new Intl.DateTimeFormat("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }).format(startDate)}
          </Text> */}
          <DateTimePicker
            style={styles.dateTime}
            testID="dateTimePicker"
            value={startDate}
            mode="date"
            is24Hour={true}
            accentColor="#9087E3"
            display="default"
            disabled={open2}
            dateFormat="day month year"
            onChange={handleDateChange}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#9087E3",
              alignSelf: "center",
              marginLeft: 20,
            }}
          >
            End Date:
          </Text>
          <DateTimePicker
            style={styles.dateTime}
            testID="dateTimePicker"
            value={startDate}
            mode="date"
            is24Hour={true}
            display="default"
          />
        </View>
      </View>

      <Text style={styles.header}>Popular Events</Text>
      <MyCarousel data={data.events.filter((item) => item.isPopular)} />
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={FilteredData}
          renderItem={({ item }) => (
            <EventCard item={item} onPress={() => sendData({ item })} />
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
    width: "90%",
    margin: 20,
    marginBottom: 10,
  },

  scrollView: {
    height: "50%",
    display: "flex",
  },
  dateTime: {
    width: 90,
    height: 40,
  },
};
export default EventPage;
