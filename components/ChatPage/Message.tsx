import { StyleSheet, Text, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import COLORS from "../../constants/colors";
import { useRef } from "react";

interface propStyle {
  message: string;
  direction: string;
  type: string;
}

export default function Message({ message, direction, type }: propStyle) {
  const video = useRef(null);
  return (
    <View
      style={direction === "outcome" ? styles.sentMessage : styles.getMessage}
    >
      {type == "text" ? (
        <Text style={styles.text}>{message}</Text>
      ) : (
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: message,
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isMuted={false}
          rate={1.0}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sentMessage: {
    maxWidth: "80%",
    padding: 5,
    marginRight: 10,
    alignSelf: "flex-end",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    backgroundColor: COLORS.purple,
  },
  getMessage: {
    maxWidth: "80%",
    padding: 5,
    marginLeft: 10,
    alignSelf: "flex-start",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    backgroundColor: COLORS.gray,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
  },
  video: {
    width: 200,
    height: 200,
    padding: 5,
    alignSelf: "flex-start",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    backgroundColor: COLORS.gray,
  },
});
