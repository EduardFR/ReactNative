import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import COLORS from "../../constants/colors";

interface Props {
  user: User;
  lastMessage: Message;
  onPress: any;
}

export default function ChatPreview({ user, lastMessage, onPress }: Props) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress(user.id);
      }}
    >
      <View style={styles.chatPreview}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        <View style={styles.textPreview}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.lastMessage}>{lastMessage.text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    borderRadius: 15,
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
