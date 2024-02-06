import { View, Text, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

const MyCarousel = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={{ uri: item.image[0] }}
          style={{
            width: "auto",
            height: 200,
            borderRadius: 10,
            opacity: 0.9,
            position: "relative",
          }}
        />
        <View
          style={{
            width: "100%",
            height: 70,
            position: "absolute",
            backgroundColor: "black",
            bottom: 0,
            opacity: 0.5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        ></View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            position: "absolute",
            bottom: 25,
            left: 10,
          }}
        >
          {item.city} {item.date} {item.hour}
        </Text>
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={350}
      autoplayInterval={3000}
      autoplayDelay={1000}
      enableMomentum={false}
      lockScrollWhileSnapping={true}
      autoplay={true} // Add this line
      //loop={true} // Loop the slides
    />
  );
};
const styles = {
  slide: {
    backgroundColor: "beige",
    borderRadius: 10,
    height: 200,
  },
};

export default MyCarousel;
