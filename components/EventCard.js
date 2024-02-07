import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const EventCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.flatList} onPress={onPress}>
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
    </TouchableOpacity>
  );
};
const styles = {
  flatList: {
    width: "90%",
    backgroundColor: "#9087E3",
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
  },
};
export default EventCard;
