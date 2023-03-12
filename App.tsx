import { StyleSheet, View } from "react-native";
import ChatsListPage from "./components/ChatsListPage/ChatsListPage";
import COLORS from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatsListPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
