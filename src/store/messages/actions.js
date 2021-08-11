import faker from 'faker';
import joshuaraichur_128 from '../../asset/joshuaraichur_128.jpg';
import { generateTime } from '../../utils/myFunc';

export const ADD_MESSAGES_LIST = 'MESSAGES::ADD_MESSAGES_LIST';
export const ADD_MESSAGE_CHAT = 'MESSAGES::ADD_MESSAGE_CHAT';
export const DELETE_MESSAGES_CHAT = 'MESSAGES::DELETE_MESSAGES_CHAT';




export const createAddMessagesListActions = (messagesList) => ({
  type: ADD_MESSAGES_LIST, 
  payload: messagesList,
});

export const createAddMessageChat = (message, idChat) => ({
  type: ADD_MESSAGE_CHAT, 
  payload: {
    message,
    idChat,
  }
});

export const createDeleteMessagesChat = (idChat) => ({
  type: DELETE_MESSAGES_CHAT,
  payload: idChat,
});

export const createAddMessageWithThunk = (message, idChat) => (dispatch) => {
  dispatch(createAddMessageChat(message, idChat));
  if (message.Author.name !== 'Robot' ) {
    let time = generateTime();
    const messgesRobot = {
      id: faker.datatype.uuid(),
      Author: {
        name: 'Robot',
        id: 9999999,
        avatar: joshuaraichur_128
      },
      text: "Привет! Я робот!",
      date: new Date()
    }
    setTimeout(() => {
      dispatch(createAddMessageChat(messgesRobot, idChat));
    }, time)
  }
} 