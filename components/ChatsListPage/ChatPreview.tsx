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
  lastMessage: [string, number | void];
  onPress: any;
}

export default function ChatPreview({ user, lastMessage, onPress }: Props) {
  const FormatDate = (date: number): string => {
    let dateFormat = new Date(date);
    return dateFormat.toLocaleString("en-US");
  };

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
          <View style={styles.lastMessageContainer}>
            <Text numberOfLines={1} style={styles.lastMessageText}>
              {lastMessage[0]}
            </Text>
            {!!lastMessage[1] ? (
              <Text style={styles.lastMessageDate}>
                {FormatDate(lastMessage[1])}
              </Text>
            ) : (
              ""
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  lastMessageContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
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
  lastMessageText: {
    color: COLORS.gray,
    width: 150,
  },
  lastMessageDate: {
    color: COLORS.gray,
    marginLeft: "auto",
    marginRight: 80,
  },
});
