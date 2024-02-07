import { View, Text, Image } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const EventDetailPage = ({ route, navigation }) => {
  const { params } = route;
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <SliderBox
        images={item.image}
        sliderBoxHeight={200}
        autoplay
        paginationBoxStyle={{
          height: 200,
          padding: 50,
        }}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "97%",
          marginTop: 5,
          position: "relative",
          backgroundColor: "red",
        }}
        //circleLoop
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 10,
          position: "absolute",
        }}
      />
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FEEBF1",
    alignItems: "center",
  },
};
export default EventDetailPage;
