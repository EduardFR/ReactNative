import { StyleSheet, Text, View } from "react-native";
import ChatPreview from "./ChatPreview";

export default function ChatsList() {
  return (
    <View style={styles.container}>
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    rowGap: 20,
  },
});
