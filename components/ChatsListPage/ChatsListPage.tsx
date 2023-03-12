import { View } from "react-native";
import ChatsList from "./ChatsList";
import Header from "./Header";

export default function ChatsListPage() {
  return (
    <View>
      <Header />
      <ChatsList />
    </View>
  );
}
