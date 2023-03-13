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

const defaultState: MessagesStateType = {
  1: [
    {
      text: "Привет",
      date: 123213123,
      direction: "income",
    },
    {
      text: "asdfawda",
      date: 123213123,
      direction: "outcome",
    },
  ],
  2: [
    {
      text: "asdfa",
      date: 123213123,
      direction: "outcome",
    },
    {
      text: "asdfawda",
      date: 123213123,
      direction: "outcome",
    },
  ],
  3: [
    {
      text: "Привет, давно не виделись, ты как?",
      date: 123213123,
      direction: "income",
    },
    {
      text: "Нормально",
      date: 123213123,
      direction: "outcome",
    },
  ],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
};

const GET_MESSAGES = "GET_MESSAGES";

export const MessagesReducer = (
  state = defaultState,
  action: actionType
): MessagesStateType => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, 1: [action.payload] };

    default:
      return state;
  }
};

export const getMessagesAction = (payload: payloadType) => ({
  type: GET_MESSAGES,
  payload,
});
