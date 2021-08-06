import { GET_MESSAGES_LIST, ADD_MESSAGE_CHAT} from './actions';
import { createMessagesList } from '../../entities/messagesList';

const chatList = createMessagesList();

export const initState = {
  messagesList: {...chatList},
}


export const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MESSAGES_LIST : {
      return {
        messagesList: {
          ...action.payload,
        }
      }
    }
    case ADD_MESSAGE_CHAT : {
      return {
        messagesList: {
          ...state.messagesList, 
          [action.payload.idChat]: [...state.messagesList[action.payload.idChat], action.payload.message] 
        }
      }
    }

    default: {
      return state;
    }

  }
}