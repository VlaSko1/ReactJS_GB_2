import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { chatsReducer } from './chats';
import { valuesReducer } from './values';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  values: valuesReducer,

})
export const store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)));