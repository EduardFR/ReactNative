import { StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";
import ChatsList from "./ChatsList";

export default function ChatsListPage() {
  return (
    <View style={styles.container}>
      <ChatsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: COLORS.black,
    borderTopWidth: 1,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
  },
});
