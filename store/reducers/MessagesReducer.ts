interface payloadTextType {
  key: number;
  text: string;
  date: number;
  direction: string;
  type: "text";
}

interface payloadVideoType {
  key: number;
  url: string;
  date: number;
  direction: string;
  type: "video";
}

interface MessagesStateType {
  [key: number]: Array<TextMessage | VideoMessage>;
}

interface actionType {
  type: string;
  payload: payloadTextType;
}

const defaultState: MessagesStateType = {};

const SEND_TEXT_MESSAGES = "SEND_TEXT_MESSAGES";
const SEND_VIDEO_MESSAGES = "SEND_VIDEO_MESSAGES";

export const MessagesReducer = (
  state = defaultState,
  action: actionType
): MessagesStateType => {
  if (!action.payload) {
    return state;
  }

  let { key, ...payload } = action.payload;

  switch (action.type) {
    case SEND_TEXT_MESSAGES:
      state[key] = [...(state[key] || []), payload];

      return { ...state };
    case SEND_VIDEO_MESSAGES:
      state[key] = [...(state[key] || []), payload];

      return { ...state };

    default:
      return state;
  }
};

export const sendTextMessagesAction = (payload: payloadTextType) => ({
  type: SEND_TEXT_MESSAGES,
  payload,
});

export const sendVideoMessageAction = (payload: payloadVideoType) => ({
  type: SEND_VIDEO_MESSAGES,
  payload,
});
