import { useDispatch } from "react-redux";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootStackParamList } from "../../types/RootStackPrams";
import Message from "./Message";
import {
  sendTextMessagesAction,
  sendVideoMessageAction,
} from "../../store/reducers/MessagesReducer";
import COLORS from "../../constants/colors";
import { useState } from "react";

type chatScreenRouteProp = RouteProp<RootStackParamList, "chat">;

export default function Messages() {
  const dispatch = useDispatch();
  const route = useRoute<chatScreenRouteProp>();
  const messages = useTypedSelector((state) => state.messages);
  const [text, setText] = useState("");

  const onPress = (text: string): void => {
    dispatch(
      sendTextMessagesAction({
        text,
        key: route.params.id,
        direction: "outcome",
        date: Date.now(),
        type: "text",
      })
    );
    setText("");

    //Имитация получения сообщения от пользователя.
    setTimeout(() => {
      if (Math.round(Math.random()) === 0) {
        dispatch(
          sendVideoMessageAction({
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            key: route.params.id,
            direction: "income",
            date: Date.now(),
            type: "video",
          })
        );
      } else {
        dispatch(
          sendTextMessagesAction({
            text: "Новое тестовое сообщение",
            key: route.params.id,
            direction: "income",
            date: Date.now(),
            type: "text",
          })
        );
      }
    }, 4000);
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={messages[route.params.id]}
        renderItem={({ item }) => (
          <Message
            message={item.type == "text" ? item.text : item.url}
            type={item.type}
            direction={item.direction}
            key={item.date}
          />
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={setText}
        ></TextInput>
        <Pressable
          style={text ? styles.buttonActive : styles.buttonDisable}
          disabled={text ? false : true}
          onPress={() => onPress(text)}
        >
          <Text></Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonDisable: {
    width: 60,
    height: "100%",
    backgroundColor: COLORS.gray,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
  },
  buttonActive: {
    width: 60,
    height: "100%",
    backgroundColor: COLORS.purple,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 12,
    borderWidth: 2,
    overflow: "hidden",
  },
  container: {
    marginTop: "auto",
    marginBottom: 20,
  },
  input: {
    height: "100%",
    width: "70%",
    padding: 10,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: COLORS.lightGray,
    color: COLORS.black,
    borderRightWidth: 2,
    borderEndColor: COLORS.black,
    borderColor: COLORS.black,
  },
  list: {
    justifyContent: "space-between",
    marginTop: 60,
    paddingBottom: 100,
    rowGap: 10,
  },
});
