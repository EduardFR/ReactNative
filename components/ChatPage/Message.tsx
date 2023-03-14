import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

interface propStyle {
  message: string;
  direction: string;
}

export default function Message({ message, direction }: propStyle) {
  return (
    <View
      style={direction === "outcome" ? styles.sentMessage : styles.getMessage}
    >
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sentMessage: {
    maxWidth: "80%",
    padding: 5,
    marginRight: 10,
    alignSelf: "flex-end",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    backgroundColor: COLORS.purple,
  },
  getMessage: {
    maxWidth: "80%",
    padding: 5,
    marginLeft: 10,
    alignSelf: "flex-start",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    backgroundColor: COLORS.gray,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
  },
});
