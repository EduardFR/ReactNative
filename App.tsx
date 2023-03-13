import { SafeAreaView, StyleSheet, View } from "react-native";
import ChatsListStack from "./navigate";
import COLORS from "./constants/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatsListStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
