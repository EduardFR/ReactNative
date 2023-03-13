import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import COLORS from "../../constants/colors";

interface propStyle {
  sentMessage: string[] | undefined;
  getMessage: string[] | undefined;
}

export default function Message({ sentMessage, getMessage }: propStyle) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sentMessage}>{sentMessage}</Text>
        <Text style={styles.getMessage}>{getMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  sentMessage: {
    alignItems: "flex-end",
    backgroundColor: COLORS.purple,
    color: COLORS.black,
  },
  getMessage: {
    alignItems: "flex-start",
    backgroundColor: COLORS.lightGray,
    color: COLORS.black,
  },
});
