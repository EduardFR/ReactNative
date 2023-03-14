export {};

declare global {
  interface User {
    id: number;
    name: string;
    avatar: string;
  }

  interface Message {
    date: integer;
    direction: string;
  }

  interface TextMessage extends Message {
    text: string;
    type: "text";
  }

  interface VideoMessage extends Message {
    url: string;
    type: "video";
  }

  interface Chats {
    [key: number]: Array<TextMessage | VideoMessage>;
  }
}
