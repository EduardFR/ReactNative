export {};

declare global {
  interface User {
    name: string;
    avatar: string;
  }

  interface Message {
    text: string;
    date: integer;
  }
}
