export const GET_CHATS_LIST = 'CHATS::GET_CHATS_LIST';
export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const createGetChatsListActions = (chatList) => ({
  type: GET_CHATS_LIST, 
  payload: chatList,
});

export const createAddChatActions = (chat) => ({
  type: ADD_CHAT, 
  payload: chat,
});

export const createDelChatByIdActions = (idChat) => ({
  type: DELETE_CHAT, 
  payload: idChat,
});