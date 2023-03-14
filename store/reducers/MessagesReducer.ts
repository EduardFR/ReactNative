interface messageType {
  text: string;
  date: number;
  direction: string;
}

interface payloadType {
  key: number;
  text: string;
  date: number;
  direction: string;
}

interface MessagesStateType {
  [key: number]: messageType[];
}

interface actionType {
  type: string;
  payload: payloadType;
}

const defaultState: MessagesStateType = {};

const GET_MESSAGES = "GET_MESSAGES";

export const MessagesReducer = (
  state = defaultState,
  action: actionType
): MessagesStateType => {
  switch (action.type) {
    case GET_MESSAGES:
      let { key, ...payload } = action.payload;

      state[key] = [...(state[action.payload.key] || []), payload];
      return { ...state };

    default:
      return state;
  }
};

export const getMessagesAction = (payload: payloadType) => ({
  type: GET_MESSAGES,
  payload,
});
