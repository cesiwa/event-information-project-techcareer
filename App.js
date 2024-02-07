import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventPage from "./screens/eventpage/EventPage";
import EventDetailPage from "./screens/eventpage/EventDetailPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="EventPage"
            component={EventPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EventDetailPage"
            component={EventDetailPage}
            options={{ title: "Event Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEEBF1",
    alignItems: "center",
    justifyContent: "center",
  },
});
