import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import ChatsListStack from "./navigate";
import COLORS from "./constants/colors";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ChatsListStack />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
