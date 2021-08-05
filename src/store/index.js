import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { chatsReducer } from './chats';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,

})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&                        
  window.__REDUX_DEVTOOLS_EXTENSION__()
);