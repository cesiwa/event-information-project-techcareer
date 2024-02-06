import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EventPage from "./screens/eventpage/EventPage";

export default function App() {
  return <EventPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
