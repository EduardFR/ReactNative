import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatPage from "./components/ChatPage/ChatPage";
import ChatsListPage from "./components/ChatsListPage/ChatsListPage";
import COLORS from "./constants/colors";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="chatlist"
          component={ChatsListPage}
          options={{
            title: "Chats list",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.purple,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
            },
          }}
        />
        <Stack.Screen
          name="chat"
          component={ChatPage}
          options={{ title: "Chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
