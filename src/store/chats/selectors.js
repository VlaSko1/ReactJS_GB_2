export const getChats = (state) => state.chats.chats || [];
export const getChatById = (idChat) => (state) => state.chats.chats.find((chat) => chat.idChat === idChat); 
export const getChatsArr = (state) => Object.keys(state.chats.chats) || [];
export const getValueChat = (idChat) => (state) => {
  let myChat = state.chats.chats.find((chat) => chat.idChat === idChat);
  return myChat.value;
};
