import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { users } from "../../constants/users";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootStackParamList } from "../../types/RootStackPrams";
import ChatPreview from "./ChatPreview";

type chatScreenNavigationProp = StackNavigationProp<RootStackParamList, "chat">;

export default function ChatsList() {
  const navigation = useNavigation<chatScreenNavigationProp>();
  const messages = useTypedSelector((state) => state.messages);
  const getLastMessage = (id: number): [string, number | void] => {
    const messagesUser = messages[id];

    if (!messagesUser) {
      return ["Сообщений нет", undefined];
    }

    const lastMessage = messagesUser[messagesUser.length - 1];

    if (lastMessage.type === "video") {
      return ["Видео", lastMessage.date];
    }

    return [lastMessage.text, lastMessage.date];
  };

  const onPress = (id: number) => {
    navigation.navigate("chat", { id });
  };
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={users}
      renderItem={({ item }) => (
        <ChatPreview
          user={item.user}
          lastMessage={getLastMessage(item.user.id)}
          key={item.key}
          onPress={onPress}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    rowGap: 20,
  },
});
