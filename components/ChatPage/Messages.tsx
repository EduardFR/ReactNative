import { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import Message from "./Message";

export default function Messages() {
  const [message, setMessage] = useState([
    { sentMessage: ["привет", "Как дела?"] },
    { getMessage: ["Привет!", "Хорошо"] },
  ]);
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={message}
      renderItem={({ item }) => (
        <Message sentMessage={item.sentMessage} getMessage={item.getMessage} />
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
