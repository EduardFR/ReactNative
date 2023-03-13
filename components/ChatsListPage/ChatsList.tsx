import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, StyleSheet } from "react-native";
import { users } from "../../constants/users";
import { RootStackParamList } from "../../types/RootStackPrams";
import ChatPreview from "./ChatPreview";

type chatScreenProp = StackNavigationProp<RootStackParamList, "chat">;

export default function ChatsList() {
  const navigation = useNavigation<chatScreenProp>();

  const onPress = () => {
    navigation.navigate("chat");
  };
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={users}
      renderItem={({ item }) => (
        <ChatPreview
          user={item.user}
          lastMessage={item.lastMessage}
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
    overflow: "hidden",
    rowGap: 20,
  },
});
