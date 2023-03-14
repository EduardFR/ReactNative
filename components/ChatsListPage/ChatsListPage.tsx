import _ from "lodash";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import COLORS from "../../constants/colors";
import { messages } from "../../constants/messages";
import { users } from "../../constants/users";
import { getMessagesAction } from "../../store/reducers/MessagesReducer";
import ChatsList from "./ChatsList";

export default function ChatsListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    users.map((user) =>
      _.sortBy(messages[user.user.id], ["date"]).map((message) =>
        dispatch(
          getMessagesAction({
            key: user.user.id,
            date: message.date,
            text: message.text,
            direction: message.direction,
          })
        )
      )
    );
  }),
    [dispatch];

  return (
    <View style={styles.container}>
      <ChatsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: COLORS.black,
    borderTopWidth: 1,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
  },
});
