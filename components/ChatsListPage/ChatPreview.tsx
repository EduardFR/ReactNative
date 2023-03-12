import { Image, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

export default function ChatPreview() {
  return (
    <View style={styles.chatPreview}>
      <Image
        style={styles.avatar}
        source={require("../../assets/adaptive-icon.png")}
      />
      <View style={styles.textPreview}>
        <Text style={styles.name}>Имя фамилия пользователя</Text>
        <Text style={styles.lastMessage}>Последнее сообщение</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatPreview: {
    marginLeft: 20,
    flexDirection: "row",
    columnGap: 20,
  },
  textPreview: {
    justifyContent: "center",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.black,
  },
  lastMessage: {
    color: COLORS.lightGray,
  },
});
