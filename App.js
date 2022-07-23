import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
//setup redux

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
      <SafeAreaProvider />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //when using react native flex box defaults to a column. coz its mob app
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
