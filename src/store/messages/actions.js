export const GET_MESSAGES_LIST = 'MESSAGES::GET_MESSAGES_LIST';
export const ADD_MESSAGE_CHAT = 'MESSAGES::ADD_MESSAGE_CHAT';


export const createGetMessagesListActions = (messagesList) => ({
  type: GET_MESSAGES_LIST, 
  payload: messagesList,
});

export const createAddMessageChat = (message, idChat) => ({
  type: ADD_MESSAGE_CHAT, 
  payload: {
    message,
    idChat,
  }
});

