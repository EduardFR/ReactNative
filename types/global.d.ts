export {};

declare global {
  interface User {
    id: number;
    name: string;
    avatar: string;
  }

  interface Message {
    text: string;
    date: integer;
    direction: string;
  }

  interface Chats {
    [key: number]: Message[] | never;
  }
}
