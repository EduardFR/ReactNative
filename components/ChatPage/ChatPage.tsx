import { StyleSheet } from "react-native";
import { View } from "react-native";
import COLORS from "../../constants/colors";
import Messages from "./Messages";

export default function ChatPage() {
  return (
    <View style={styles.container}>
      <Messages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderTopColor: COLORS.lightGray,
    borderTopWidth: 1,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
  },
});
