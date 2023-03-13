import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootStackParamList } from "../../types/RootStackPrams";
import Message from "./Message";

type chatScreenRouteProp = RouteProp<RootStackParamList, "chat">;

export default function Messages() {
  const route = useRoute<chatScreenRouteProp>();
  const messages = useTypedSelector((state) => state.messages);
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={messages[route.params.id]}
      renderItem={({ item }) => (
        <Message message={item.text} direction={item.direction} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
    rowGap: 10,
  },
});
