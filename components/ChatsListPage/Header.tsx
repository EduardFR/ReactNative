import { SafeAreaView, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

export default function Header() {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>Chats list</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    paddingTop: 20,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.purple,
  },
});
